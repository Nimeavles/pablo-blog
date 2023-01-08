import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../components";
import { Box, Container } from "@mui/material";

interface Props {
  title: string;
  description: string;
  keywords?: string[];
  children: ReactNode;
}

const defaultKeywords: string[] = [
  "Tecnologies",
  "Typescript",
  "Blog",
  "Nextjs",
  "Javascript",
  "Internet",
];

export const PageLayout: FC<Props> = ({
  title,
  description,
  keywords = defaultKeywords,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.toString()} />
      </Head>
      <Navbar />
      <Box
        sx={{
          minHeight: {
            sm: "calc(100vh - 64px)",
            xs: "calc(100vh - 56px)",
          },
        }}
        bgcolor="primary.main"
      >
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </>
  );
};
