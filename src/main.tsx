import { createRoot } from "react-dom/client";
import "./styles/globals.css";

import App from "./app/App";
import { QaDevToolsProvider, QaDevToolsRoutes, QaFloatingActions } from "./components/dev";
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Elemento raiz "#root" não encontrado.');
}

createRoot(rootElement).render(
  <QaDevToolsProvider initiallyOpen>
    <App />
    <QaFloatingActions />
    <QaDevToolsRoutes />
  </QaDevToolsProvider>,
);
