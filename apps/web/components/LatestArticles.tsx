import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { Props } from "../interfaces/HomePage";
import { ArticleCard } from "./ArticleCard";

export const LatestArticles = ({ posts }: Props) => {
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
        {posts.map((post) => (
          <ArticleCard
            key={post.title}
            title={post.title}
            description={post.description}
            slug={post.slug}
            image={`/${post.language}.svg`}
          />
        ))}
        <ListItem>
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
        </ListItem>
      </List>
    </Box>
  );
};
