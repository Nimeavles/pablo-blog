import { Link } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  href: string;
  hrefDescription: string;
}

export const LinkPage: FC<Props> = ({ href, hrefDescription }) => {
  return (
    <Link href={href} color={"secondary.main"}>
      {hrefDescription}
    </Link>
  );
};
