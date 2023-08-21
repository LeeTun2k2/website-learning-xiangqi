'use client';
import * as React from 'react';
import { AppBar, Box, Button, Container, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, alpha, styled } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu'; 
import FacebookIcon from '@mui/icons-material/Facebook'; 
import YoutubeIcon from '@mui/icons-material/Youtube'; 
import SearchIcon from '@mui/icons-material/Search'; 
import Logo from '@/assets/images/logo.png';

type TPage = {
  title: string;
  path: string;
}

const pages: TPage[] = [
  {title: 'KHÓA HỌC', path: '/course'},
  {title: 'ĐANG HỌC', path: '/lesson'},
  {title: 'ỦNG HỘ', path: ''},
]

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
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemOnClick = (page: TPage) => {
    router.push(page.path);
  }

  return (
    <AppBar 
      position='static' 
      sx={{
          padding: {md: '0 15rem', xs: '0'},
          backgroundColor: '#FFF', 
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);'}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{display: { xs: 'none', md: 'none', lg: 'flex' }}}>
            <Image 
              src={Logo}
              alt='Cờ tướng'
              width={80}
              />
          </Box>
          <Typography
            noWrap
            component='a'
            href='/'
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
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              sx={{color: '#000'}}
            >
              <MenuIcon sx={{color: '#000', fontSize: 25}}/>
            </IconButton>
            <Menu
              id='menu-appbar'
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
                <MenuItem key={page.title} onClick={() => {handleMenuItemOnClick(page)}}>
                  <Typography sx={{textAlign:'center', fontSize: '1.4rem'}}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h1'
            noWrap
            component='a'
            href='/'
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
                key={page.title}
                onClick={() => {handleCloseNavMenu}}
                sx={{ my: 2, color: '#000', display: 'flex', fontSize: '1.4rem', fontWeight: 500 }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }}}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{color: '#000', fontSize: '2rem'}}/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Tìm kiếm'
                inputProps={{ 'aria-label': 'search' }}
                sx={{fontSize: '1.4rem'}}
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