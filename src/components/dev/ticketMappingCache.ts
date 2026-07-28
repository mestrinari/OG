import { chamadosApi } from "./features/chamados/chamadosApi";
import type { MapeamentoPaginasResponse } from "./features/chamados/types";

let cachedMapping: MapeamentoPaginasResponse | null = null;
let pendingMapping: Promise<MapeamentoPaginasResponse> | null = null;

export function primeTicketMappingCache(mapping: MapeamentoPaginasResponse) {
  cachedMapping = mapping;
  return mapping;
}

export function resetTicketMappingCache() {
  cachedMapping = null;
  pendingMapping = null;
}

export function getTicketMapping(): Promise<MapeamentoPaginasResponse> {
  if (cachedMapping) return Promise.resolve(cachedMapping);
  if (pendingMapping) return pendingMapping;
  pendingMapping = chamadosApi
    .mapeamentoPaginas()
    .then(primeTicketMappingCache)
    .finally(() => {
      pendingMapping = null;
    });
  return pendingMapping;
}



