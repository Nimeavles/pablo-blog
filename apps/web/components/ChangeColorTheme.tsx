import { useState, useContext } from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { ThemeContext } from "../context/theme";

export const ChangeColorTheme = () => {
  const [dark, setDark] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setDark(!dark);
  };

  return (
    <IconButton
      onClick={handleThemeChange}
      sx={{
        width: "50px",
        height: "50px",
      }}
      aria-label="delete"
      color={dark ? "default" : "secondary"}
    >
      {dark ? <NightlightRoundIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
