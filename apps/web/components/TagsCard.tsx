import { Box, Typography } from "@mui/material";
import Image from "next/image";

const languages = ["ts", "js"];

export const TagsCard = ({ tag }: any) => {
  return (
    <Box
      sx={{
        borderColor: "secondary.light",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
      borderRadius="50px"
      paddingX="15px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="35px"
    >
      <Typography variant="body1" fontFamily="montserrat" fontWeight="bold">
        {tag}
      </Typography>
    </Box>
  );
};
