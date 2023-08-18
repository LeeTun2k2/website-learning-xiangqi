"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import Logo from '@/assets/images/logo.png';

const pages = ['NHẬP MÔN', 'SÁT PHÁP CƠ BẢN', "CHUYỆN CỜ TƯỚNG"];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="static" 
      sx={{
          padding: {md: '0 15rem', xs: '0 6rem'},
          backgroundColor: '#FFF', 
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{display: { xs: 'none', md: 'none', lg: 'flex' }}}>
            <Image 
              src={Logo}
              alt=""
              width={80}
              />
          </Box>
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 1,
              display: { xs: 'none', md: 'none', lg: 'flex' },
              fontSize: '1.8rem',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            DẠY CỜ TƯỚNG
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: '#000'}}
            >
              <MenuIcon sx={{color: '#000'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex', lg: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              fontSize: '1.8rem',
              letterSpacing: '.2rem',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            DẠY CỜ TƯỚNG
          </Typography>
          <Box sx={{ flexGrow: 1, ml: '1.6rem', display: { xs: 'none', md: 'none', lg: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000', display: 'flex', fontSize: '1.4rem', fontWeight: 500 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }}}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{color: '#000', fontSize: "2rem"}}/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Tìm kiếm"
                inputProps={{ 'aria-label': 'search' }}
                sx={{fontSize: "1.4rem"}}
              />
            </Search>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <FacebookIcon sx={{color: '#2374E1', margin: '0 .4rem', cursor: 'pointer', fontSize: '2.4rem'}}/>
              <YoutubeIcon sx={{color: '#FF0000', margin: '0 .4rem', cursor: 'pointer', fontSize: '2.4rem'}}/>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}