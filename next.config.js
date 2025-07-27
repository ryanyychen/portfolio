const isGitHubPages = process.env.NEXT_PUBLIC_BASE_PATH === "/portfolio";

const nextConfig = {
  output: isGitHubPages ? "export" : "standalone",
  basePath: isGitHubPages ? "/portfolio" : "",
  assetPrefix: isGitHubPages ? "/portfolio/" : "",
};

module.exports = nextConfig;
