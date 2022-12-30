import { MouseEvent, useState } from "react";
import Image from "next/image";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/logo.png";

const pages = ["📋Artículos", "🏠Inicio", "💵Donaciones"];

export function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ fontFamily: "Pontano Sans" }}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <IconButton
                  sx={{
                    width: "auto",
                    paddingX: "20px",
                    borderRadius: "50px",
                    backgroundColor: "secondary.main",
                    "&:hover": {
                      backgroundColor: "secondary.light",
                    },
                  }}
                >
                  <SearchIcon />
                  <Typography sx={{ ml: 1 }}>Buscar...</Typography>
                </IconButton>
              </MenuItem>
            </Menu>
          </Box>
          <Image
            src={logo}
            alt="logo"
            height={40}
            width={40}
            style={{ borderRadius: "50%", marginRight: "15px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              display: "flex",
              flexGrow: 1,
              fontFamily: "montserrat",
              fontWeight: "bold",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {"Pablo's Blog"}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "capitalize",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{
              width: "auto",
              paddingX: "20px",
              borderRadius: "50px",
              backgroundColor: "secondary.main",
              display: { xs: "none", md: "flex" },
              "&:hover": {
                backgroundColor: "secondary.light",
              },
            }}
          >
            <SearchIcon />
            <Typography sx={{ ml: 1 }}>Buscar...</Typography>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
