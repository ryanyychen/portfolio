const isGitHubPages = process.env.NEXT_PUBLIC_BASE_PATH === "/portfolio";
console.log("isGitHubPages:", isGitHubPages);

const nextConfig = {
  output: isGitHubPages ? "export" : "standalone",
  basePath: isGitHubPages ? "/personal-website" : "",
  assetPrefix: isGitHubPages ? "/personal-website/" : "",
};

module.exports = nextConfig;
