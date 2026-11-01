import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({ baseDirectory: projectRoot });

/**
 * ESLint 9 exige configuración plana. `next lint` quedó deprecado en Next 15.5,
 * así que el script `lint` llama a ESLint directamente y el build usa la misma
 * configuración.
 */
const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "next-env.d.ts",
      "**/*.tsbuildinfo",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default config;
