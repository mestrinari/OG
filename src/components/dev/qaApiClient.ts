const QA_PATH_PREFIX = "/api/qa";
export const DEFAULT_QA_DEVTOOLS_API_URL = QA_PATH_PREFIX;

let qaApiBaseUrl = DEFAULT_QA_DEVTOOLS_API_URL;
let qaAccessToken: string | null = null;

export const QA_AUTH_UNAUTHORIZED_EVENT = "qa-devtools:unauthorized";

export function normalizeQaApiBaseUrl(value?: string) {
  const normalized = (value?.trim() || DEFAULT_QA_DEVTOOLS_API_URL).replace(/\/+$/, "");
  if (!/^https?:\/\//i.test(normalized) && !normalized.startsWith("/")) {
    throw new Error(
      `QaDevToolsProvider: apiBaseUrl deve ser uma URL HTTP(S) ou um caminho iniciado por "/", por exemplo ${DEFAULT_QA_DEVTOOLS_API_URL}.`,
    );
  }
  return normalized;
}

export function configureQaApiBaseUrl(value?: string) {
  qaApiBaseUrl = normalizeQaApiBaseUrl(value);
  return qaApiBaseUrl;
}

export function getQaApiBaseUrl() {
  return qaApiBaseUrl;
}

export function configureQaAccessToken(token?: string | null) {
  qaAccessToken = token?.trim() || null;
}

export function clearQaAccessToken() {
  qaAccessToken = null;
}

export function resolveQaApiUrl(resource: string | URL) {
  const rawUrl = String(resource);
  const parsed = new URL(rawUrl, "http://qa-devtools.local");
  const pathname = parsed.pathname === QA_PATH_PREFIX
    ? ""
    : parsed.pathname.startsWith(`${QA_PATH_PREFIX}/`)
      ? parsed.pathname.slice(QA_PATH_PREFIX.length)
      : parsed.pathname;
  return `${qaApiBaseUrl}${pathname}${parsed.search}${parsed.hash}`;
}

export function resolveQaServiceUrl(resource: string | URL) {
  const rawUrl = String(resource);
  if (/^https?:\/\//i.test(rawUrl)) return rawUrl;

  const pathname = rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`;
  if (/^https?:\/\//i.test(qaApiBaseUrl)) {
    return new URL(pathname, new URL(qaApiBaseUrl).origin).toString();
  }
  return pathname;
}

function getOriginalFetch() {
  const originalFetch = (window as Window & { __originalFetch?: typeof fetch }).__originalFetch;
  return originalFetch ?? window.fetch.bind(window);
}

function withAuthentication(
  resource: RequestInfo | URL,
  init?: RequestInit,
): RequestInit {
  const headers = new Headers(
    resource instanceof Request ? resource.headers : undefined,
  );
  new Headers(init?.headers).forEach((value, name) => headers.set(name, value));
  if (qaAccessToken && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${qaAccessToken}`);
  }
  return { ...init, headers };
}

async function validateAuthentication(response: Response) {
  if (response.status === 401 && qaAccessToken) {
    clearQaAccessToken();
    window.dispatchEvent(new CustomEvent(QA_AUTH_UNAUTHORIZED_EVENT));
  }
  return response;
}

export function qaFetch(resource: RequestInfo | URL, init?: RequestInit) {
  const rawUrl = resource instanceof Request ? resource.url : String(resource);
  const targetUrl = resolveQaApiUrl(rawUrl);
  const authenticatedInit = withAuthentication(resource, init);
  if (resource instanceof Request) {
    return window
      .fetch(new Request(targetUrl, resource), authenticatedInit)
      .then(validateAuthentication);
  }
  return window.fetch(targetUrl, authenticatedInit).then(validateAuthentication);
}

export function qaRawFetch(resource: RequestInfo | URL, init?: RequestInit) {
  const rawUrl = resource instanceof Request ? resource.url : String(resource);
  const targetUrl = resolveQaApiUrl(rawUrl);
  const request = getOriginalFetch();
  const authenticatedInit = withAuthentication(resource, init);
  if (resource instanceof Request) {
    return request(new Request(targetUrl, resource), authenticatedInit)
      .then(validateAuthentication);
  }
  return request(targetUrl, authenticatedInit).then(validateAuthentication);
}

export function qaServiceFetch(
  resource: RequestInfo | URL,
  init?: RequestInit,
) {
  const rawUrl = resource instanceof Request ? resource.url : String(resource);
  const targetUrl = resolveQaServiceUrl(rawUrl);
  const request = getOriginalFetch();
  const authenticatedInit = withAuthentication(resource, init);
  if (resource instanceof Request) {
    return request(new Request(targetUrl, resource), authenticatedInit)
      .then(validateAuthentication);
  }
  return request(targetUrl, authenticatedInit).then(validateAuthentication);
}
