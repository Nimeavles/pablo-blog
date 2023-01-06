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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const pages = [
  { page: "📋Artículos", path: "/posts" },
  { page: "🏠Inicio", path: "/" },
  { page: "💵Donaciones", path: "/support" },
];

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
              {pages.map(({ page, path }) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={path}>
                    <Typography
                      sx={{ fontFamily: "Pontano Sans" }}
                      textAlign="center"
                    >
                      {page}
                    </Typography>
                  </Link>
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
            src="/logo.png"
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
            {pages.map(({ page, path }) => (
              <Link href={path} key={page}>
                <Box
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    ml: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    fontFamily: "Pontano Sans",
                    fontWeight: "600",
                    fontSize: "18px",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  {page}
                </Box>
              </Link>
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
