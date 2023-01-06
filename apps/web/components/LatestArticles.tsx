import { Box, List, Typography } from "@mui/material";
import { Props } from "../interfaces/HomePage";
import { ArticleCard } from "./ArticleCard";

export const LatestArticles = ({ articles }: Props) => {
  return (
    <Box>
      <Typography
        variant="h6"
        fontFamily="montserrat"
        fontWeight="bold"
        color="white"
        pt="20px"
      >
        Últimos artículos
      </Typography>
      <List sx={{ marginLeft: "25px", marginBottom: "30px" }}>
        {articles.map((article) => (
          <ArticleCard
            key={article.titles}
            title={article.titles}
            description="some random text for making sure"
          />
        ))}
      </List>
    </Box>
  );
};
