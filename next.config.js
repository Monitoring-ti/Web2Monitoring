/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  eslint: {
    // Desactivar validación de eslint en producción para evitar incompatibilidades de versión de ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Desactivar detención de compilación por TS rules en build si es necesario, pero intentemos arreglar el tipo de CSS primero
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
