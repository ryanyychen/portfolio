const isGitHubPages = process.env.NEXT_PUBLIC_BASE_PATH === "/portfolio";
console.log("isGitHubPages:", isGitHubPages);

const nextConfig = {
  output: isGitHubPages ? "export" : "standalone",
  basePath: isGitHubPages ? "/portfolio" : "",
  assetPrefix: isGitHubPages ? "/portfolio/" : "",
};

module.exports = nextConfig;
