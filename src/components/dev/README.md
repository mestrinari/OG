# QA DevTools portátil

Esta pasta contém uma cópia autocontida do QA DevTools. Ela pode ser copiada inteira para outro projeto React sem depender de arquivos localizados fora de `dev`.

## Guia completo

Consulte [`INTEGRATION.md`](./INTEGRATION.md) para a lista integral de bibliotecas, configuração do Vite, proxy/CORS, autenticação, APIs necessárias e checklist de migração.

O instalador multiplataforma acompanha a pasta. Execute-o na raiz do projeto de destino:

```bash
node src/components/dev/scripts/install-dependencies.mjs npm
```

## Isolamento de estilos

O launcher e a janela são renderizados dentro de um Shadow DOM. Tailwind, tema, fontes e `package.css` permanecem encapsulados nesta pasta e não alteram tokens, resets ou classes CSS do projeto hospedeiro. Não mova os estilos de `dev/styles` para o CSS global da aplicação.

## Dependências do projeto hospedeiro

Não copie `node_modules`. Instale o conjunto completo e nas versões já validadas usando o script da própria pasta:

```bash
node src/components/dev/scripts/install-dependencies.mjs npm
```

A tabela completa das dependências de runtime e build está em [`INTEGRATION.md`](./INTEGRATION.md#3-instalar-todas-as-bibliotecas). O projeto precisa processar Tailwind CSS v4; em um projeto Vite, mantenha `tailwindcss()` na lista de plugins do `vite.config.ts`.

## Integração

Copie a pasta `dev` e envolva a aplicação no ponto de entrada:

```tsx
import {
  QaDevToolsProvider,
  QaDevToolsRoutes,
  QaFloatingActions,
} from "./components/dev";

createRoot(document.getElementById("root")!).render(
  <QaDevToolsProvider
    apiBaseUrl="/api/qa"
    user={usuarioAtual}
  >
    <App />
    <QaFloatingActions />
    <QaDevToolsRoutes />
  </QaDevToolsProvider>,
);
```

`QaFloatingActions` exibe o botão arrastável no sistema hospedeiro. `QaDevToolsRoutes` renderiza o QA DevTools completo em uma janela que pode ser movida e redimensionada.

## Autorização exclusiva do DevTools

A tela de acesso autentica e-mail e senha em `POST /api/auth/login`. O JWT retornado fica apenas no `sessionStorage` da aba e é incluído automaticamente como Bearer nas APIs do pacote. Depois do login, a configuração completa é carregada por `GET /api/usuario-config/{usuarioId}`.

O menu de usuário no canto superior exibe o nome autenticado. A ação `Sair` remove o token e mantém a janela aberta na tela de acesso. Um HTTP 401 em uma chamada autenticada também encerra a sessão automaticamente.

## API

- `apiBaseUrl`: URL HTTP(S) ou rota relativa exclusiva do backend QA DevTools. O padrão é `/api/qa`.
- `user`: dados opcionais do usuário do sistema hospedeiro; a identidade efetiva vem do login.
- `initiallyOpen`: abre a janela imediatamente quando `true`.
- `useQaDevTools()`: expõe abertura da janela, `authStatus`, `authError`, `usuarioConfig`, `loginWithCredentials` e `logout`.
- `QaDevToolsApp`: aplicação completa sem a janela flutuante, para uso direto em uma rota dedicada.

## Estrutura

- `package.tsx`: provider, botão flutuante, janela ajustável e API pública.
- `App.tsx`, `RegistrarChamado.tsx`, `ChamadoDetalhes.tsx`: telas da ferramenta.
- `features/`: APIs e tipagens de chamados, testes, DevTools, insights, operações e validações.
- monitores na raiz da pasta: HTTP, console, erros, performance, serviços e contadores.
- `styles/`: Tailwind e tema isolado dentro da janela do pacote.
- `imports/`: tipos compartilhados pelos módulos.

Para incorporar evoluções feitas no projeto principal, sincronize os arquivos correspondentes desta pasta antes de copiá-la novamente.

As chamadas do sistema hospedeiro não são redirecionadas. O pacote apenas observa o `fetch` global depois da autorização. Em desenvolvimento, configure o proxy do Vite para encaminhar `/api/qa` e `/api/usuario-config` ao backend QA.
