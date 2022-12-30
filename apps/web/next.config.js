const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
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
