import { chamadosApi } from "./features/chamados/chamadosApi";
import { resolveAutomaticTicketTarget } from "./networkTicketContext";
import { getTicketMapping } from "./ticketMappingCache";
import { useNetworkLogger, type NetworkLog } from "./useNetworkLogger";

let installed = false;

async function validateFailureAvailability(failure: NetworkLog) {
  const store = useNetworkLogger.getState();
  if (
    store.latestFailure?.id !== failure.id ||
    store.latestFailureTicketState !== "unchecked"
  ) {
    return;
  }

  store.setFailureTicketState(failure.id, "checking");
  try {
    const mapping = await getTicketMapping();
    const target = resolveAutomaticTicketTarget(failure, mapping);
    if (!target) {
      useNetworkLogger
        .getState()
        .setFailureTicketState(failure.id, "available");
      return;
    }

    const availability = await chamadosApi.disponibilidadeItem(
      target.itemPaginaId,
    );
    useNetworkLogger
      .getState()
      .setFailureTicketState(
        failure.id,
        availability.disponivel ? "available" : "existing",
        availability.existingTicket,
      );
  } catch {
    useNetworkLogger
      .getState()
      .setFailureTicketState(failure.id, "check-failed");
  }
}

export function installFailureAvailabilityMonitor() {
  if (installed || typeof window === "undefined") return;
  installed = true;

  const current = useNetworkLogger.getState().latestFailure;
  if (current) void validateFailureAvailability(current);

  useNetworkLogger.subscribe((state, previous) => {
    if (
      state.failureSequence !== previous.failureSequence &&
      state.latestFailure
    ) {
      void validateFailureAvailability(state.latestFailure);
    }
  });
}



