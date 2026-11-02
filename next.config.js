/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/Web2Monitoring" : "";

const nextConfig = {
  ...(isGithubPages ? { output: "export" } : {}),
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  // El redirect automático de barra final de Next intercepta `/_next/image`
  // (no tiene extensión, así que siempre cae en la regla) y obliga a cada
  // imagen a un 308 antes de servirse. Se desactiva aquí y la barra final de
  // las páginas se resuelve en src/middleware.ts, donde el orden es explícito.
  skipTrailingSlashRedirect: true,
  images: {
    // La copia de GitHub Pages es un export estático y no admite el optimizador.
    // En el hosting principal el sitio corre como servidor Next.js, donde sí
    // funciona: genera srcset responsivo y formatos modernos para cada imagen.
    unoptimized: isGithubPages,
  },
};

module.exports = nextConfig;
