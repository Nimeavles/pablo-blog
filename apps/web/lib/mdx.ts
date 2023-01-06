import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

export const getFiles = async (path: string) => {
  const files = await readdir(join(process.cwd(), path));
  return files;
};

export const getFileBySlug = async (slug: string) => {
  const mdxArticle = await readFile(
    join(process.cwd(), `./data/posts/${slug}.mdx}`),
    "utf8"
  );
  return mdxArticle;
};
