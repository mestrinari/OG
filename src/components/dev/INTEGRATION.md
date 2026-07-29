# Integração completa do QA DevTools

Esta pasta é autocontida. Copie `src/components/dev` inteira para um projeto React + Vite e mantenha sua estrutura interna. Nenhum arquivo de código dentro dela depende de componentes, estilos ou assets do projeto de origem.

## 1. Requisitos

- Node.js compatível com Vite 6.
- React 18.
- Vite com TypeScript e Tailwind CSS 4.
- Backend com as rotas `/api/qa` e `/api/usuario-config`.

O pacote usa Shadow DOM para isolar seus estilos. Não importe `dev/styles/index.css` no CSS global do projeto: `package.tsx` injeta esses estilos automaticamente no Shadow DOM e nas janelas externas.

## 2. Copiar a pasta

Copie a pasta sem separar seus arquivos:

```text
projeto-destino/
└─ src/
   └─ components/
      └─ dev/
         ├─ auth/
         ├─ features/
         ├─ imports/
         ├─ scripts/
         ├─ styles/
         ├─ ui/
         ├─ index.ts
         └─ package.tsx
```

O botão compartilhado pelo editor de imagem está em `dev/ui/Button.tsx`; portanto, o editor não depende mais de `src/components/ui`.

## 3. Instalar todas as bibliotecas

Na raiz do projeto de destino, execute o instalador que acompanha a pasta:

```bash
node src/components/dev/scripts/install-dependencies.mjs npm
```

Também são aceitos `pnpm`, `yarn` e `bun` no último argumento:

```bash
node src/components/dev/scripts/install-dependencies.mjs pnpm
```

Para apenas conferir os comandos sem instalar ou alterar o `package.json`, use:

```bash
node src/components/dev/scripts/install-dependencies.mjs npm --dry-run
```

### Dependências de runtime

| Biblioteca | Versão validada | Uso |
|---|---:|---|
| `react` | `18.3.1` | Componentes e hooks |
| `react-dom` | `18.3.1` | Portais, Shadow DOM e janelas externas |
| `@radix-ui/react-dialog` | `1.1.6` | Estrutura acessível dos diálogos |
| `lucide-react` | `0.487.0` | Ícones |
| `motion` | `12.23.24` | Animações do editor e diálogos |
| `recharts` | `2.15.2` | Gráficos do dashboard |
| `styled-components` | `6.4.3` | Editor de imagem e componentes internos |
| `tw-animate-css` | `1.3.8` | Utilitários de animação do Tailwind |
| `zustand` | `5.0.14` | Stores dos monitores e contadores |

### Dependências de desenvolvimento/build

| Biblioteca | Versão validada | Uso |
|---|---:|---|
| `vite` | `6.4.3` | Build e imports CSS com `?inline` |
| `@vitejs/plugin-react` | `4.7.0` | JSX/React no Vite |
| `tailwindcss` | `4.1.12` | Geração das classes usadas dentro de `dev` |
| `@tailwindcss/vite` | `4.1.12` | Integração Tailwind 4 + Vite |
| `typescript` | `7.0.2` | Tipagem e typecheck |
| `@types/react` | `19.2.17` | Tipos React validados neste projeto |
| `@types/react-dom` | `19.2.3` | Tipos de portais e DOM |

Se o projeto de destino já possui React/Vite, compare as versões antes de executar o script. O instalador reproduz exatamente o conjunto validado neste projeto.

## 4. Configurar o Vite

Adicione o plugin do Tailwind ao `vite.config.ts`. O proxy abaixo evita CORS durante o desenvolvimento:

```ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const qaBackend = env.QA_DEVTOOLS_PROXY_TARGET || "https://localhost:7193";

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/api/qa": {
          target: qaBackend,
          changeOrigin: true,
          secure: false,
        },
        "/api/usuario-config": {
          target: qaBackend,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
```

Crie `.env.local` no projeto de destino:

```env
QA_DEVTOOLS_PROXY_TARGET=https://localhost:7193
```

Em produção, o servidor que publica o frontend deve encaminhar `/api/qa` e `/api/usuario-config` ao backend. Como alternativa, passe uma URL absoluta em `apiBaseUrl`; nesse caso, o backend precisa liberar via CORS a origem real do frontend e os métodos `GET`, `POST`, `PUT`, `PATCH`, `DELETE` e `OPTIONS`.

## 5. Montar no ponto de entrada

No `src/main.tsx`, envolva a aplicação com o provider e coloque as duas superfícies do DevTools como irmãs do aplicativo:

```tsx
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  QaDevToolsProvider,
  QaDevToolsRoutes,
  QaFloatingActions,
} from "./components/dev";

createRoot(document.getElementById("root")!).render(
  <QaDevToolsProvider apiBaseUrl="/api/qa">
    <App />
    <QaFloatingActions />
    <QaDevToolsRoutes />
  </QaDevToolsProvider>,
);
```

- `QaFloatingActions` renderiza o botão arrastável que abre o painel.
- `QaDevToolsRoutes` renderiza a janela principal, minimização e atalhos flutuantes.
- `QaDevToolsProvider` controla autenticação, preferências, monitores e URL da API.
- `QaDevToolsApp` pode ser usado isoladamente em uma rota dedicada, caso não queira a janela flutuante.

## 6. Autenticação exclusiva do DevTools

O usuário informa e-mail e senha na tela do DevTools. A sessão é criada por:

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "dev@example.com",
  "senha": "senha-do-usuario"
}
```

A resposta precisa conter `accessToken`, `expiraEmUtc` e o usuário autenticado. O token é enviado como `Authorization: Bearer` nas demais APIs, e a configuração completa é carregada por `GET /api/usuario-config/{usuarioId}`.

Uma resposta de login válida tem este formato:

```json
{
  "accessToken": "eyJ...",
  "tokenType": "Bearer",
  "expiraEmUtc": "2026-07-29T07:00:00Z",
  "usuario": {
    "usuarioId": 1,
    "nome": "Usuário DEV",
    "perfilId": 1,
    "email": "dev@example.com"
  }
}
```

As preferências são salvas por:

```http
PUT /api/usuario-config/{usuarioId}
Content-Type: application/json
```

Uma falha nessa autenticação desativa somente o QA DevTools; a aplicação hospedeira continua funcionando.

## 7. APIs consumidas

O backend do QA precisa disponibilizar estas áreas sob `/api/qa`:

- `/chamados`, `/chamados/catalogos` e `/chamados/mapeamento-paginas`;
- `/sistemas/{sistemaId}/modulos`;
- `/testes/casos`;
- `/devtools/flags`;
- `/insights/performance` e relatórios;
- `/operacoes/exploracoes`, `/operacoes/evidencias` e `/operacoes/massas`;
- `/validacoes/ambientes`.

A criação de chamado usa a disponibilidade do item antes do POST:

```http
GET /api/qa/chamados/mapeamento-paginas/itens/{itemPaginaId}/disponibilidade
```

O backend deve responder `disponivel: false` enquanto existir chamado não final para aquele item e também deve aplicar a mesma regra no `POST /api/qa/chamados`, evitando duplicidade em requisições concorrentes.

## 8. Build e validação

Adicione ou mantenha estes scripts no `package.json` do projeto de destino:

```json
{
  "scripts": {
    "dev": "vite",
    "typecheck": "tsc --noEmit",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Depois da integração, execute:

```bash
npm run typecheck
npm run build
```

Para confirmar automaticamente que a pasta continua isolada, execute:

```bash
node src/components/dev/scripts/check-isolation.mjs
```

O verificador resolve cada import relativo e falha se algum deles apontar para fora de `dev` ou para um arquivo inexistente. Imports internos em `features/*` podem conter `../../`, desde que o destino resolvido ainda esteja nessa pasta.

## 9. Checklist de migração

- Copiar a pasta `dev` inteira.
- Executar o instalador de dependências na raiz do destino.
- Ativar `react()` e `tailwindcss()` no Vite.
- Configurar proxy de desenvolvimento ou CORS no backend.
- Montar provider, launcher e routes no ponto de entrada.
- Disponibilizar autenticação e APIs QA.
- Executar typecheck e build.
- Testar Console, HTTP, Chamados, editor de imagem, minimização e janelas externas.
