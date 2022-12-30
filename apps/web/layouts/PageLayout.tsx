import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../components";

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
      {children}
    </>
  );
};
