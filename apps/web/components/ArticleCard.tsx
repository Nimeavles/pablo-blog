import { Box, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image?: any;
  slug: string;
}

export const ArticleCard = ({
  title,
  image = "/js.svg",
  description,
  slug,
}: Props) => {
  return (
    <Link href={`/posts/${slug}`}>
      <ListItem
        sx={{
          display: "flex",
          width: { md: "80%" },
          transition: "all .3s ease",
          "&:hover": {
            backgroundColor: "#20252c",
            borderRadius: "5px",
            transform: "scale(1.05, 1.05)",
          },
        }}
      >
        <Image src={image} alt="image" width={60} height={60} />
        <Box>
          <Typography
            color="secondary.main"
            fontFamily="Pontano Sans"
            fontWeight="bold"
            fontStyle="italic"
            fontSize={{ xs: "1.125em", sm: "1.375rem" }}
          >
            {title}
          </Typography>
          <Typography
            color="#ccc"
            fontSize={{ xs: "13px", sm: "15px" }}
            fontFamily="montserrat"
          >
            {description}
          </Typography>
        </Box>
      </ListItem>
    </Link>
  );
};
