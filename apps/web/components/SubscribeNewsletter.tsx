import { CSSProperties } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const styles: CSSProperties = {
  padding: "10px 15px",
  border: "solid 3px #FFD700",
  borderRadius: "5px",
  backgroundColor: "#000",
  width: "80%",
  color: "white",
  fontFamily: "montserrat",
  fontWeight: "bold",
  outline: "none",
};

export const SubscribeNewsletter = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        textTransform="uppercase"
        color="secondary.light"
        fontFamily="montserrat"
        marginBottom="25px"
      >
        Subscríbete a la newsletter
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <input placeholder="Correo Electrónico" style={styles} />
        <IconButton
          sx={{
            backgroundColor: "secondary.main",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: "secondary.dark",
            },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
      <Typography
        variant="subtitle2"
        color="white"
        fontFamily="Pontano Sans"
        fontWeight="500"
        marginTop="5px"
      >
        * No es necesaria una tarjeta de crédito
      </Typography>
    </Box>
  );
};
