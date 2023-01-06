import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { GetStaticProps } from "next";
import { LatestArticles } from "../components";
import { Props } from "../interfaces/HomePage";
import { PageLayout } from "../layouts";
import { getFiles } from "../lib";

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

export default function Index({ articles }: Props) {
  return (
    <PageLayout
      title={metaData.title}
      description={metaData.description}
      keywords={metaData.keywords}
    >
      <Box
        sx={{
          minHeight: {
            sm: "calc(100vh - 64px)",
            xs: "calc(100vh - 56px)",
          },
        }}
        bgcolor="primary.main"
      >
        <Container maxWidth="lg">
          <LatestArticles articles={articles} />
        </Container>
      </Box>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getFiles("./data/posts", 5);
  const articles = posts.map((post) => ({
    titles: post.replace(/\.mdx/, "").replace("-", " "),
  }));

  return {
    props: {
      articles,
    },
  };
};
