import { Box, Typography } from "@mui/material";
import { Props } from "../interfaces/HomePage";

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
      {articles.map((article, index) => (
        <Typography
          key={index}
          variant="h6"
          fontFamily="montserrat"
          fontWeight="bold"
          color="white"
          pt="20px"
        >
          {article.titles}
        </Typography>
      ))}
    </Box>
  );
};
