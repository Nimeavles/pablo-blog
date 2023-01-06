import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";

export const getFiles = async (path: string) => {
  const files = await readdir(join(process.cwd(), path));
  return files;
};

export const getFileBySlug = async (slug: string) => {
  const mdxArticle = await readFile(
    join(process.cwd(), `./data/posts/${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(mdxArticle);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [require("mdx-prism")],
    },
  });

  return {
    source,
    frontmatter: {
      slug,
      ...data,
    },
  };
};
