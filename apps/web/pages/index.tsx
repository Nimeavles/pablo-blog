import { Box } from "@mui/material";
import homebg from "../assets/home-bg.png";
import { Navbar } from "../components";

export default function Index() {
  return (
    <Box minHeight="100vh" bgcolor="primary.main">
      <Navbar />
    </Box>
  );
}
