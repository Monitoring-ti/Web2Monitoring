/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/Web2Monitoring" : "";

const nextConfig = {
  ...(isGithubPages ? { output: "export" } : {}),
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
