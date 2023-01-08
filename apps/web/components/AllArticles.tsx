import { Box, Typography } from "@mui/material";
import { Props } from "../interfaces/HomePage";
import { ArticlesList } from "./ArticlesList";

export const AllArticles = ({ posts }: Props) => {
  return (
    <Box>
      <Typography
        variant="h6"
        fontFamily="montserrat"
        fontWeight="bold"
        color="white"
        pt="20px"
      >
        Todos los artículos
      </Typography>
      <ArticlesList posts={posts} />
    </Box>
  );
};
