import { GetStaticProps } from "next";
import { AllArticles } from "../components";
import { Props } from "../interfaces/HomePage";
import { PageLayout } from "../layouts";
import { getAllFilesFrontMatter } from "../lib";

function Articles({ posts }: Props) {
  return (
    <PageLayout
      title="Todos los artículos"
      description="Todos los artículos del blog"
    >
      <AllArticles posts={posts} />
    </PageLayout>
  );
}

export default Articles;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter();

  return {
    props: {
      posts,
    },
  };
};
