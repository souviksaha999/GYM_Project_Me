import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../Slice/AuthSlice';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  const { logoutToggle } = useSelector((state) => {
    console.log("NAV_STATE...", state?.auth)
    return state?.auth
  });

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOut())
    
  }

  const name = localStorage.getItem("name")

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 2 }}
      >
        <Container maxWidth="xxl">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={
                  // 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                  // 'https://assets.hellovector.com/product-images/s_3248.jpg'
                  'https://thegymcms.com/img/brand/og/gym-brand-og.png'
                }
                height="63px"
                // style={logoStyle}
                alt="logo of sitemark"
                style={{ borderRadius: "30px" }}
              />



            </Box>

            {
              !logoutToggle ? (
                <>
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                      gap: 0.5,
                      alignItems: 'center',
                    }}
                  >
                    {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
                    <Button
                      color="primary"
                      variant="text"
                      size="small"
                      component="a"
                    // href="/material-ui/getting-started/templates/sign-in/"
                    // target="_blank"
                    >
                      <Link to="/login" style={{ color: 'white', textDecoration: "none" }}>Sign in</Link>

                    </Button>
                    <Button
                      // color="primary"
                      variant="contained"
                      size="small"
                      component="a"
                      sx={{ backgroundColor: "#e31c25" }}
                    >
                      <Link to="/reg" style={{ color: 'inherit', textDecoration: "none" }}>Sign up</Link>

                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <MenuItem
                      onClick={() => scrollToSection('features')}
                      sx={{ py: '6px', px: '12px' }}
                    >
                      <Typography variant="body2" color="text.primary">
                        <Link to='/' style={{ textDecoration: "none", color: "black", fontSize: "17px" }} > Home </Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => scrollToSection('features')}
                      sx={{ py: '6px', px: '12px' }}
                    >
                      <Typography variant="body2" color="text.primary">
                        <Link to='/blog' style={{ textDecoration: "none", color: "black", fontSize: "17px" }}> Blogs </Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => scrollToSection('testimonials')}
                      sx={{ py: '6px', px: '12px' }}
                    >
                      <Typography variant="body2" color="text.primary">
                        <Link to='/trainer' style={{ textDecoration: "none", color: "black", fontSize: "17px" }}> Trainer </Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => scrollToSection('highlights')}
                      sx={{ py: '6px', px: '12px' }}
                    >
                      <Typography variant="body2" color="text.primary">
                        <Link to='/testimonials' style={{ textDecoration: "none", color: "black", fontSize: "17px" }}> Testimonials </Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => scrollToSection('pricing')}
                      sx={{ py: '6px', px: '12px' }}
                    >
                      <Typography variant="body2" color="text.primary">
                        <Link to='/services' style={{ textDecoration: "none", color: "black", fontSize: "17px" }}> Services </Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => scrollToSection('faq')}
                      sx={{ py: '6px', px: '12px' }}
                    >
                      <Typography variant="body2" color="text.primary">
                        <Link to='/booking' style={{ textDecoration: "none", color: "black", fontSize: "17px" }}> Booking </Link>

                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => scrollToSection('faq')}
                      sx={{ py: '6px', px: '12px' }}
                    >
                      <Typography variant="body2" color="text.primary">
                        <Link to='/booking' style={{ textDecoration: "none", color: "black", fontSize: "17px" }}> {name} </Link>

                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => scrollToSection('faq')}
                      sx={{ py: '6px', px: '12px' }}
                    >
                      <Typography variant="body2" color="text.primary" onClick={handleLogout}>
                        <Link to='/booking' style={{ textDecoration: "none", color: "black", fontSize: "17px" }}> Logout </Link>

                      </Typography>
                    </MenuItem>
                  </Box>
                </>)
            }









            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>


              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem onClick={() => scrollToSection('features')}>
                    <Link to='/blog' style={{ textDecoration: "none", color: "black", fontSize: "17px" }}> Blogs </Link>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')}>
                    <Link to='/trainer' style={{ textDecoration: "none", color: "black", fontSize: "17px" }}> Trainer </Link>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('highlights')}>
                    <Link to='/testimonials' style={{ textDecoration: "none", color: "black", fontSize: "17px" }}> Testimonials </Link>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('pricing')}>
                    <Link to='/services' style={{ textDecoration: "none", color: "black", fontSize: "17px" }}> Services </Link>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>Booking</MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      // href="/material-ui/getting-started/templates/sign-up/"
                      // target="_blank"
                      sx={{ width: '100%' }}
                    >
                      <Link to="/reg" style={{ color: 'inherit', listStyle: "none", textDecoration: "none" }}>Sign up</Link>

                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      // href="/material-ui/getting-started/templates/sign-in/"
                      // target="_blank"
                      sx={{ width: '100%' }}
                    >
                      <Link to="/login" style={{ color: 'inherit', listStyle: "none", textDecoration: "none" }}>Sign in</Link>

                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>


            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;