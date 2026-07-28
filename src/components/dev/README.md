# QA DevTools portátil

Esta pasta contém uma cópia autocontida do QA DevTools. Ela pode ser copiada inteira para outro projeto React sem depender de arquivos localizados fora de `dev`.

## Isolamento de estilos

O launcher e a janela são renderizados dentro de um Shadow DOM. Tailwind, tema, fontes e `package.css` permanecem encapsulados nesta pasta e não alteram tokens, resets ou classes CSS do projeto hospedeiro. Não mova os estilos de `dev/styles` para o CSS global da aplicação.

## Dependências do projeto hospedeiro

Não copie `node_modules`. Instale apenas as dependências usadas pelo pacote:

```bash
npm install react react-dom lucide-react recharts zustand
npm install -D tailwindcss @tailwindcss/vite
```

O projeto precisa processar Tailwind CSS v4. Em um projeto Vite, mantenha `tailwindcss()` na lista de plugins do `vite.config.ts`.

## Integração

Copie a pasta `dev` e envolva a aplicação no ponto de entrada:

```tsx
import {
  QaDevToolsProvider,
  QaDevToolsRoutes,
  QaFloatingActions,
} from "./app/components/dev";

createRoot(document.getElementById("root")!).render(
  <QaDevToolsProvider
    apiBaseUrl="https://localhost:44383/api/qa"
    user={usuarioAtual}
  >
    <App />
    <QaFloatingActions />
    <QaDevToolsRoutes />
  </QaDevToolsProvider>,
);
```

`QaFloatingActions` exibe o botão arrastável no sistema hospedeiro. `QaDevToolsRoutes` renderiza o QA DevTools completo em uma janela que pode ser movida e redimensionada.

## API

- `apiBaseUrl`: URL absoluta e exclusiva do backend QA DevTools. O padrão é `https://localhost:44383/api/qa`.
- `user`: usuário atual do sistema hospedeiro.
- `initiallyOpen`: abre a janela imediatamente quando `true`.
- `useQaDevTools()`: permite abrir ou fechar a janela por código.
- `QaDevToolsApp`: aplicação completa sem a janela flutuante, para uso direto em uma rota dedicada.

## Estrutura

- `package.tsx`: provider, botão flutuante, janela ajustável e API pública.
- `App.tsx`, `RegistrarChamado.tsx`, `ChamadoDetalhes.tsx`: telas da ferramenta.
- `features/`: APIs e tipagens de chamados, testes, DevTools, insights, operações e validações.
- monitores na raiz da pasta: HTTP, console, erros, performance, serviços e contadores.
- `styles/`: Tailwind e tema isolado dentro da janela do pacote.
- `imports/`: tipos compartilhados pelos módulos.

Para incorporar evoluções feitas no projeto principal, sincronize os arquivos correspondentes desta pasta antes de copiá-la novamente.

As chamadas do sistema hospedeiro não são redirecionadas. O pacote apenas observa o `fetch` global para preencher o Monitor HTTP; todos os dados próprios do modal são carregados e salvos pela URL absoluta acima. O backend QA deve permitir CORS para a origem do sistema hospedeiro e seu certificado HTTPS deve ser confiável no navegador.
