import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "../../components";
import { PostProps } from "../../interfaces/PostsPage";
import { PageLayout } from "../../layouts";
import { getFileBySlug, getFiles } from "../../lib";

export default function Post({ source, frontmatter }: PostProps) {
  return (
    <PageLayout title={frontmatter.title} description={frontmatter.description}>
      <MDXRemote {...source} components={MDXComponents} />
    </PageLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("./data/posts");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  console.log(slug);

  const { source, frontmatter } = await getFileBySlug(slug);

  return {
    props: {
      source,
      frontmatter: {
        ...frontmatter,
      },
    },
  };
};
