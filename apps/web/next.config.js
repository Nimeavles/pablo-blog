const withMDX = require("@next/mdx")({
  // By default only the .mdx extension is supported.
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
