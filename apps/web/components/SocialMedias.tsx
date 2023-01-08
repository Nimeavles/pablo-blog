import { ButtonGroup, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

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
    <ButtonGroup size="large">
      {socialMediasIcons.map((socialMedia, index) => (
        <Link href={socialMedia.media} target="_blank">
          <IconButton
            children={socialMedia.component}
            key={index}
            color="secondary"
          />
        </Link>
      ))}
    </ButtonGroup>
  );
};
