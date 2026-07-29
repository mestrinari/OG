#!/usr/bin/env node

import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const supportedManagers = new Set(["npm", "pnpm", "yarn", "bun"]);
const requestedManager = process.argv[2] ?? "npm";
const dryRun = process.argv.includes("--dry-run");

if (!supportedManagers.has(requestedManager)) {
  console.error(`Gerenciador inválido: ${requestedManager}. Use npm, pnpm, yarn ou bun.`);
  process.exit(1);
}

if (!existsSync("package.json")) {
  console.error("Execute este script na raiz do projeto de destino, onde está o package.json.");
  process.exit(1);
}

const runtimeDependencies = [
  "@radix-ui/react-dialog",
  "lucide-react",
  "motion",
  "react",
  "react-dom",
  "recharts",
  "styled-components",
  "tw-animate-css",
  "zustand",
];

const developmentDependencies = [
  "@tailwindcss/vite",
  "@types/react",
  "@types/react-dom",
  "@vitejs/plugin-react",
  "tailwindcss",
  "typescript",
  "vite",
];

const commands = {
  npm: {
    runtime: ["install", ...runtimeDependencies],
    development: ["install", "--save-dev", ...developmentDependencies],
  },
  pnpm: {
    runtime: ["add", ...runtimeDependencies],
    development: ["add", "--save-dev", ...developmentDependencies],
  },
  yarn: {
    runtime: ["add", ...runtimeDependencies],
    development: ["add", "--dev", ...developmentDependencies],
  },
  bun: {
    runtime: ["add", ...runtimeDependencies],
    development: ["add", "--dev", ...developmentDependencies],
  },
};

function run(args) {
  if (dryRun) {
    console.log(`${requestedManager} ${args.join(" ")}`);
    return;
  }
  const result = spawnSync(requestedManager, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }
  if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log(`Instalando dependências de runtime com ${requestedManager}...`);
run(commands[requestedManager].runtime);
console.log(`Instalando dependências de desenvolvimento com ${requestedManager}...`);
run(commands[requestedManager].development);
console.log("Dependências do QA DevTools instaladas com sucesso.");
