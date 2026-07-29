import {
  clearQaAccessToken,
  configureQaAccessToken,
  qaServiceFetch,
} from "../qaApiClient";

const QA_AUTH_SESSION_KEY = "qa-devtools.auth-session";

export type UsuarioConfigAuth = {
  usuarioId: number;
  nome: string;
  perfilId: number;
  email: string | null;
  dataCriacao: string | null;
  buttonX: number | null;
  buttonY: number | null;
  modalX: number | null;
  modalY: number | null;
  modalW: number | null;
  modalH: number | null;
  isDark: boolean | null;
};

export type UsuarioConfigPreferences = Pick<
  UsuarioConfigAuth,
  | "buttonX"
  | "buttonY"
  | "modalX"
  | "modalY"
  | "modalW"
  | "modalH"
  | "isDark"
  | "perfilId"
>;

export type UsuarioConfigUpdateRequest = Omit<
  UsuarioConfigAuth,
  "usuarioId" | "dataCriacao"
>;

export type QaDevToolsAuthStatus =
  | "validating"
  | "authenticated"
  | "unauthenticated"
  | "error";

export type QaAuthUsuario = {
  usuarioId: number;
  nome: string;
  perfilId: number;
  email: string | null;
};

export type QaAuthSession = {
  accessToken: string;
  tokenType: "Bearer" | string;
  expiraEmUtc: string;
  usuario: QaAuthUsuario;
};

type ApiErrorPayload = {
  code?: string;
  message?: string;
};

function isUsuarioConfigAuth(value: unknown): value is UsuarioConfigAuth {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<UsuarioConfigAuth>;
  return (
    Number.isSafeInteger(candidate.usuarioId) &&
    Number(candidate.usuarioId) > 0 &&
    typeof candidate.nome === "string" &&
    candidate.nome.trim().length > 0 &&
    Number.isSafeInteger(candidate.perfilId) &&
    Number(candidate.perfilId) > 0
  );
}

function isQaAuthSession(value: unknown): value is QaAuthSession {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<QaAuthSession>;
  const usuario = candidate.usuario as Partial<QaAuthUsuario> | undefined;
  return (
    typeof candidate.accessToken === "string" &&
    candidate.accessToken.length > 0 &&
    typeof candidate.expiraEmUtc === "string" &&
    Number.isFinite(Date.parse(candidate.expiraEmUtc)) &&
    !!usuario &&
    Number.isSafeInteger(usuario.usuarioId) &&
    Number(usuario.usuarioId) > 0 &&
    Number.isSafeInteger(usuario.perfilId) &&
    Number(usuario.perfilId) > 0 &&
    typeof usuario.nome === "string"
  );
}

async function readApiError(response: Response, fallback: string) {
  try {
    const payload = (await response.json()) as ApiErrorPayload;
    return payload.message?.trim() || fallback;
  } catch {
    return fallback;
  }
}

export async function loginQaDevTools(
  email: string,
  senha: string,
  signal?: AbortSignal,
): Promise<QaAuthSession> {
  clearQaAccessToken();
  const response = await qaServiceFetch("/api/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.trim(), senha }),
    signal,
  });

  if (!response.ok) {
    throw new Error(
      await readApiError(
        response,
        response.status === 401
          ? "E-mail ou senha inválidos."
          : `Não foi possível entrar (HTTP ${response.status}).`,
      ),
    );
  }

  const payload: unknown = await response.json();
  if (!isQaAuthSession(payload)) {
    throw new Error("A API retornou uma sessão de autenticação inválida.");
  }
  return payload;
}

export async function refreshQaAuthSession(
  signal?: AbortSignal,
): Promise<QaAuthSession> {
  const response = await qaServiceFetch("/api/auth/refresh", {
    method: "POST",
    headers: { Accept: "application/json" },
    signal,
  });

  if (!response.ok) {
    throw new Error(
      await readApiError(
        response,
        `Não foi possível atualizar as permissões da sessão (HTTP ${response.status}).`,
      ),
    );
  }

  const payload: unknown = await response.json();
  if (!isQaAuthSession(payload)) {
    throw new Error("A API retornou uma sessão renovada inválida.");
  }
  return payload;
}

export function saveQaAuthSession(session: QaAuthSession) {
  configureQaAccessToken(session.accessToken);
  try {
    window.sessionStorage.setItem(QA_AUTH_SESSION_KEY, JSON.stringify(session));
  } catch {
    // A sessão continua válida em memória se o storage estiver indisponível.
  }
}

export function restoreQaAuthSession(): QaAuthSession | null {
  try {
    const stored = window.sessionStorage.getItem(QA_AUTH_SESSION_KEY);
    if (!stored) return null;
    const session: unknown = JSON.parse(stored);
    if (!isQaAuthSession(session) || Date.parse(session.expiraEmUtc) <= Date.now()) {
      clearQaAuthSession();
      return null;
    }
    configureQaAccessToken(session.accessToken);
    return session;
  } catch {
    clearQaAuthSession();
    return null;
  }
}

export function clearQaAuthSession() {
  clearQaAccessToken();
  try {
    window.sessionStorage.removeItem(QA_AUTH_SESSION_KEY);
  } catch {
    // Não há estado persistido para limpar quando o storage está bloqueado.
  }
}

export async function authenticateQaDevToolsUser(
  usuarioId: number,
  signal?: AbortSignal,
): Promise<UsuarioConfigAuth | null> {
  const response = await qaServiceFetch(
    `/api/usuario-config/${encodeURIComponent(usuarioId)}`,
    {
      method: "GET",
      headers: { Accept: "application/json" },
      signal,
    },
  );

  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(
      `Não foi possível carregar o usuário do QA DevTools (HTTP ${response.status}).`,
    );
  }

  const payload: unknown = await response.json();
  if (!isUsuarioConfigAuth(payload) || payload.usuarioId !== usuarioId) {
    throw new Error("A API retornou uma configuração de usuário inválida.");
  }

  return payload;
}

export async function updateQaDevToolsUserConfig(
  usuarioId: number,
  config: UsuarioConfigUpdateRequest,
  signal?: AbortSignal,
): Promise<UsuarioConfigAuth> {
  const response = await qaServiceFetch(
    `/api/usuario-config/${encodeURIComponent(usuarioId)}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(config),
      signal,
    },
  );

  if (!response.ok) {
    throw new Error(
      `Não foi possível salvar as preferências do QA DevTools (HTTP ${response.status}).`,
    );
  }

  const payload: unknown = await response.json();
  if (!isUsuarioConfigAuth(payload) || payload.usuarioId !== usuarioId) {
    throw new Error("A API retornou uma configuração de usuário inválida.");
  }

  return payload;
}
