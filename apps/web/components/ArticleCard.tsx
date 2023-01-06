import { Box, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image?: any;
}

export const ArticleCard = ({
  title,
  image = "/js.svg",
  description,
}: Props) => {
  return (
    <Link href={`/posts/${title}`}>
      <ListItem sx={{ display: "flex", width: "80%" }}>
        <Image src={image} alt="image" width={70} height={70} />
        <Box>
          <Typography
            color="secondary.main"
            fontFamily="Pontano Sans"
            fontWeight="bold"
            fontStyle="italic"
            fontSize="22px"
          >
            {title}
          </Typography>
          <Typography color="#ccc" fontSize="15px" fontFamily="montserrat">
            {description}
          </Typography>
        </Box>
      </ListItem>
    </Link>
  );
};
