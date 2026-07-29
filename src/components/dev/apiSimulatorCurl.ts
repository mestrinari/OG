export type ParsedCurl = {
  method: string;
  url: string;
  headers: Array<{ key: string; value: string }>;
  body: string;
  payloadType: "none" | "json" | "text" | "form-urlencoded" | "form-data" | "graphql";
  credentials: RequestCredentials;
  redirect: RequestRedirect;
  timeoutMs: number;
};

function shellTokens(source: string) {
  const normalized = source.replace(/\\\r?\n/g, " ").trim();
  const tokens: string[] = [];
  let token = "";
  let quote: "'" | '"' | null = null;
  let escaping = false;
  for (const char of normalized) {
    if (escaping) { token += char; escaping = false; continue; }
    if (char === "\\" && quote !== "'") { escaping = true; continue; }
    if (quote) { if (char === quote) quote = null; else token += char; continue; }
    if (char === "'" || char === '"') { quote = char; continue; }
    if (/\s/.test(char)) { if (token) { tokens.push(token); token = ""; } continue; }
    token += char;
  }
  if (escaping) token += "\\";
  if (quote) throw new Error("cURL inválido: aspas não foram fechadas.");
  if (token) tokens.push(token);
  return tokens;
}

function splitHeader(value: string) {
  const index = value.indexOf(":");
  return index < 0
    ? { key: value.trim(), value: "" }
    : { key: value.slice(0, index).trim(), value: value.slice(index + 1).trim() };
}

export function parseBashCurl(source: string): ParsedCurl {
  const tokens = shellTokens(source);
  if (!tokens.length || !/^(curl|curl\.exe)$/i.test(tokens[0])) throw new Error("Cole um comando iniciado por curl.");
  let method = "GET";
  let url = "";
  let body = "";
  let hasData = false;
  let hasForm = false;
  let credentials: RequestCredentials = "same-origin";
  let redirect: RequestRedirect = "follow";
  let timeoutMs = 30000;
  const headers: Array<{ key: string; value: string }> = [];
  const take = (index: number, option: string) => {
    const value = tokens[index + 1];
    if (value === undefined) throw new Error(`O parâmetro ${option} precisa de um valor.`);
    return value;
  };

  for (let index = 1; index < tokens.length; index += 1) {
    const current = tokens[index];
    if (current === "-X" || current === "--request") { method = take(index, current).toUpperCase(); index++; continue; }
    if (current === "-H" || current === "--header") { headers.push(splitHeader(take(index, current))); index++; continue; }
    if (["-d", "--data", "--data-raw", "--data-binary", "--data-ascii", "--data-urlencode"].includes(current)) {
      const value = take(index, current); body = body ? `${body}&${value}` : value; hasData = true; index++; continue;
    }
    if (current === "-F" || current === "--form" || current === "--form-string") { body += `${body ? "\n" : ""}${take(index, current)}`; hasForm = true; index++; continue; }
    if (current === "-u" || current === "--user") { headers.push({ key: "Authorization", value: `Basic ${btoa(unescape(encodeURIComponent(take(index, current))))}` }); index++; continue; }
    if (current === "-A" || current === "--user-agent") { headers.push({ key: "User-Agent", value: take(index, current) }); index++; continue; }
    if (current === "-e" || current === "--referer") { headers.push({ key: "Referer", value: take(index, current) }); index++; continue; }
    if (current === "-b" || current === "--cookie") { headers.push({ key: "Cookie", value: take(index, current) }); credentials = "include"; index++; continue; }
    if (current === "-L" || current === "--location") { redirect = "follow"; continue; }
    if (current === "--max-time" || current === "--connect-timeout") { timeoutMs = Math.max(0, Number(take(index, current)) * 1000 || 0); index++; continue; }
    if (current === "--url") { url = take(index, current); index++; continue; }
    if (["-k", "--insecure", "--compressed", "-s", "--silent", "-S", "--show-error", "-i", "--include", "-v", "--verbose", "--http1.1", "--http2"].includes(current)) continue;
    if (current.startsWith("-")) {
      // Opções específicas do processo curl não possuem equivalente no fetch do navegador.
      continue;
    }
    if (!url) url = current;
  }
  if (!url) throw new Error("O cURL não contém uma URL.");
  if ((hasData || hasForm) && method === "GET") method = "POST";
  const contentType = headers.find(item => item.key.toLowerCase() === "content-type")?.value.toLowerCase() ?? "";
  const payloadType: ParsedCurl["payloadType"] = hasForm ? "form-data"
    : contentType.includes("graphql") ? "graphql"
      : contentType.includes("json") || (/^[\[{]/.test(body.trim()) && hasData) ? "json"
        : contentType.includes("x-www-form-urlencoded") ? "form-urlencoded"
          : hasData ? "text" : "none";
  return { method, url, headers, body, payloadType, credentials, redirect, timeoutMs };
}

export function pairsToText(items: Array<{ key: string; value: string }>) {
  return items.map(item => `${item.key}: ${item.value}`).join("\n");
}

export function textToPairs(value: string, separator: ":" | "=") {
  return value.split("\n").map(line => line.trim()).filter(Boolean).map(line => {
    const index = line.indexOf(separator);
    return index < 0 ? { key: line, value: "" } : { key: line.slice(0, index).trim(), value: line.slice(index + 1).trim() };
  });
}
