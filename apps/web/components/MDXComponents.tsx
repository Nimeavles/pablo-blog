import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import { UI } from "ui";

const defaultProps = {
  fontFamily: "montserrat",
  color: "#F2F7A1",
  as: "b",
  textTransform: "capitalize",
};

export const MDXComponent: any = {
  LinkPage: (props: any) => <UI.Link {...props} color="#FFD700" />,
  LinkIcon: () => <LaunchIcon sx={{ width: "20px", height: "20px" }} />,
  img: Image,
  h1: (props: any) => (
    <UI.Heading fontSize={"50px"} {...props} {...defaultProps} />
  ),
  h2: (props: any) => (
    <UI.Heading fontSize={"40px"} {...props} {...defaultProps} />
  ),
  h3: (props: any) => (
    <UI.Heading fontSize={"35px"} {...props} {...defaultProps} />
  ),
  h4: (props: any) => (
    <UI.Heading fontSize={"30px"} {...props} {...defaultProps} />
  ),
  h5: (props: any) => (
    <UI.Heading fontSize={"25px"} {...props} {...defaultProps} />
  ),
  h6: (props: any) => (
    <UI.Heading fontSize={"20px"} {...props} {...defaultProps} />
  ),
  p: (props: any) => (
    <UI.Text as="p" fontFamily="Roboto" {...props} fontSize={"18px"} py={12} />
  ),
};
