import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { SocialMedias } from "./SocialMedias";
import { SubscribeNewsletter } from "./SubscribeNewsletter";

const pages = [
  { page: "📋Artículos", path: "/articles" },
  { page: "🏠Inicio", path: "/" },
  { page: "💵Donaciones", path: "/support" },
];

export const Footer = () => {
  return (
    <footer>
      <Box
        bgcolor="primary.dark"
        minHeight="40vh"
        display="flex"
        alignItems="center"
        paddingY={{ xs: "20px", md: 0 }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: { xs: "center", md: "none" },
            gap: { xs: 2, md: 0 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <SubscribeNewsletter />
          <Box>
            {pages.map(({ page, path }) => (
              <Link href={path} key={path}>
                <Typography
                  variant="body1"
                  mb="25px"
                  color="secondary.light"
                  fontFamily="montserrat"
                  fontWeight="bold"
                >
                  {page}
                </Typography>
              </Link>
            ))}
          </Box>
          <SocialMedias />
        </Container>
      </Box>
    </footer>
  );
};
