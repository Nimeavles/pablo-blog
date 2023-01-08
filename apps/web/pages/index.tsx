import { Typography } from "@mui/material";
import { GetStaticProps } from "next";
import Link from "next/link";
import { ArticlesList } from "../components";
import { Props } from "../interfaces/HomePage";
import { PageLayout } from "../layouts";
import { getAllFilesFrontMatter } from "../lib";

const metaData = {
  title: "Inicio - Pablo's Blog",
  description: "Página de inicio de Pablo's Blog",
  keywords: [
    "Inicio",
    "Landing Page",
    "Blog",
    "Typescript",
    "Technology",
    "Web Dev",
  ],
};

export default function Index({ posts }: Props) {
  return (
    <PageLayout
      title={metaData.title}
      description={metaData.description}
      keywords={metaData.keywords}
    >
      <Typography
        variant="h6"
        fontFamily="montserrat"
        fontWeight="bold"
        color="white"
        pt="20px"
      >
        Últimos artículos
      </Typography>
      <ArticlesList posts={posts} />
      <Link href="/articles">
        <Typography
          fontFamily="montserrat"
          fontWeight="bold"
          color="secondary.dark"
          ml="6px"
        >
          ➡️ Ver más
        </Typography>
      </Link>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter(5);

  return {
    props: {
      posts,
    },
  };
};
