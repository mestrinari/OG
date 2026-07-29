#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, isAbsolute, relative, resolve } from "node:path";

const devRoot = resolve(process.argv[2] ?? "src/components/dev");
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);
const resolvableExtensions = ["", ".ts", ".tsx", ".js", ".jsx", ".css", ".json"];

function walk(directory) {
  return readdirSync(directory).flatMap(name => {
    const path = resolve(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function resolveLocalImport(importer, specifier) {
  const pathWithoutQuery = specifier.split("?")[0].split("#")[0];
  const base = resolve(dirname(importer), pathWithoutQuery);
  for (const extension of resolvableExtensions) {
    const candidate = `${base}${extension}`;
    if (existsSync(candidate) && !statSync(candidate).isDirectory()) return candidate;
  }
  for (const extension of resolvableExtensions.slice(1)) {
    const candidate = resolve(base, `index${extension}`);
    if (existsSync(candidate)) return candidate;
  }
  return null;
}

function isInsideDev(path) {
  const pathFromRoot = relative(devRoot, path);
  return pathFromRoot === "" || (!pathFromRoot.startsWith("..") && !isAbsolute(pathFromRoot));
}

const problems = [];
for (const file of walk(devRoot).filter(path => sourceExtensions.has(extname(path)))) {
  const source = readFileSync(file, "utf8");
  const sourceWithoutComments = source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
  const specifiers = extname(file) === ".css"
    ? [...sourceWithoutComments.matchAll(/@import\s+["']([^"']+)["']/g)].map(match => match[1])
    : [...sourceWithoutComments.matchAll(/(?:\bfrom\s*|\bimport\s*\(\s*|\bimport\s*)["']([^"']+)["']/g)]
        .map(match => match[1]);

  for (const specifier of specifiers.filter(value => value.startsWith("."))) {
    const resolvedImport = resolveLocalImport(file, specifier);
    if (!resolvedImport) {
      problems.push(`${relative(devRoot, file)}: import não encontrado: ${specifier}`);
    } else if (!isInsideDev(resolvedImport)) {
      problems.push(`${relative(devRoot, file)}: import externo: ${specifier} -> ${resolvedImport}`);
    }
  }
}

if (problems.length) {
  console.error("A pasta dev ainda possui dependências locais externas:\n");
  problems.forEach(problem => console.error(`- ${problem}`));
  process.exit(1);
}

console.log(`Isolamento confirmado: todos os imports locais resolvem dentro de ${devRoot}.`);
