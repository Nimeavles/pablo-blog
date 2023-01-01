import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { LatestArticles } from "../components";
import { PageLayout } from "../layouts";

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

export default function Index() {
  return (
    <PageLayout
      title={metaData.title}
      description={metaData.description}
      keywords={metaData.keywords}
    >
      <Box
        sx={{
          minHeight: {
            md: "calc(100vh - 75px)",
            sm: "calc(100vh - 64px)",
            xs: "calc(100vh - 56px)",
          },
        }}
        bgcolor="primary.main"
      >
        <Container maxWidth="lg">
          <LatestArticles />
        </Container>
      </Box>
    </PageLayout>
  );
}
