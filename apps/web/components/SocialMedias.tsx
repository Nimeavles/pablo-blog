import Link from "next/link";
import { Box, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const socialMediasIcons = [
  {
    media: "https://www.instagram.com/pablorodriigueezz_/",
    component: <InstagramIcon />,
  },
  { media: "https://twitter.com/Pablorodriiigue", component: <TwitterIcon /> },
  { media: "https://github.com/Nimeavles", component: <GitHubIcon /> },
];

export const SocialMedias = () => {
  return (
    <Box>
      {socialMediasIcons.map((socialMedia, index) => (
        <Link href={socialMedia.media} target="_blank">
          <IconButton key={index} color="secondary">
            {socialMedia.component}
          </IconButton>
        </Link>
      ))}
    </Box>
  );
};
