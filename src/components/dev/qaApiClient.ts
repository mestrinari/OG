const QA_PATH_PREFIX = "/api/qa";
export const DEFAULT_QA_DEVTOOLS_API_URL = QA_PATH_PREFIX;

let qaApiBaseUrl = DEFAULT_QA_DEVTOOLS_API_URL;

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

export function qaFetch(resource: RequestInfo | URL, init?: RequestInit) {
  const rawUrl = resource instanceof Request ? resource.url : String(resource);
  const targetUrl = resolveQaApiUrl(rawUrl);
  if (resource instanceof Request) {
    return window.fetch(new Request(targetUrl, resource), init);
  }
  return window.fetch(targetUrl, init);
}

export function qaRawFetch(resource: RequestInfo | URL, init?: RequestInit) {
  const rawUrl = resource instanceof Request ? resource.url : String(resource);
  const targetUrl = resolveQaApiUrl(rawUrl);
  const originalFetch = (window as Window & { __originalFetch?: typeof fetch }).__originalFetch;
  const request = originalFetch ?? window.fetch.bind(window);
  if (resource instanceof Request) {
    return request(new Request(targetUrl, resource), init);
  }
  return request(targetUrl, init);
}
