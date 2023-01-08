import { Box, List, ListItem, Typography } from "@mui/material";
import { Props } from "../interfaces/HomePage";
import { ArticleCard } from "./ArticleCard";

export const ArticlesList = ({ posts }: Props) => {
  return (
    <Box>
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
      </List>
    </Box>
  );
};
