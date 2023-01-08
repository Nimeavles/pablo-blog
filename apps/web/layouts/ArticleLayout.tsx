import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import { TagsCard } from "../components";

interface Props {
  children: ReactNode;
  frontmatter: any;
}

export const ArticleLayout = ({ children, frontmatter }: Props) => {
  return (
    <Box pt="40px">
      <Box display="flex" mb="40px" alignItems="center">
        <Box display={{ xs: "none", sm: "block" }}>
          <Image
            src={`/${frontmatter.language}.svg`}
            alt="image"
            width={105}
            height={105}
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography
            variant="h1"
            fontFamily="montserrat"
            fontWeight="bold"
            fontSize={{ xs: "25px", sm: "40px", md: "50px" }}
            textTransform="capitalize"
            color="secondary"
          >
            {frontmatter.title}
          </Typography>
          <Box display="flex" gap={2} mt="10px">
            {frontmatter.tags &&
              frontmatter.tags.map((tag: any) => (
                <TagsCard tag={tag} key={tag} />
              ))}
          </Box>
        </Box>
      </Box>
      {children}
    </Box>
  );
};
