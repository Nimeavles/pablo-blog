import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { readFileSync } from "node:fs";

export const getFiles = async (path: string, limit?: number) => {
  const files = await readdir(join(process.cwd(), path));

  if (limit && files.length > limit) {
    files.length = limit;
  }

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

export const getAllFilesFrontMatter = async (limit?: number) => {
  const files = await readdir(join(process.cwd(), "./data/posts/"));

  if (limit && files.length > limit) {
    files.length = limit;
  }

  return files.reduce((allPosts: any, postSlug) => {
    const mdxSource = readFileSync(
      join(process.cwd(), "./data/posts/", postSlug),
      "utf8"
    );
    const { data } = matter(mdxSource);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};
