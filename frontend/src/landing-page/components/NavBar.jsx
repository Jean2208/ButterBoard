import * as React from 'react';

import reactLogo from '../../assets/react.svg';
import '../../App.css'

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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LoginIcon from '@mui/icons-material/Login';
const logoStyle = {
  width: '40px',
  height: 'auto',
  cursor: 'pointer',
};


const textStyle = {
    marginLeft: '10px', // Adjust spacing between image and text
    fontSize: '20px', // Adjust font size as needed
    fontWeight: 'bold', // Adjust font weight as needed
};

function NavBar({ mode, toggleColorMode }) {
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

  return (
    <div className="navbar">
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',

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

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <a href="https://react.dev" target="_blank">
                          <img src={reactLogo} style={logoStyle} className="logo" alt="React logo" />
                      </a>
                      <Typography variant="h6" component="span" sx={{ ml: 1, color: 'gray'}}>
                          ButterBoard
                      </Typography>
                  </Box>

                  <Box sx={{display: {xs: 'none', md: 'flex'}}}>


                  </Box>
              </Box>
              <Box
                  sx={{
                      display: {xs: 'none', md: 'flex'},
                      gap: 0.5,
                      alignItems: 'center',
                  }}
              >
                  <MenuItem
                      onClick={() => scrollToSection('Calendar')}
                      sx={{py: '6px', px: '12px'}}
                  >
                      <Typography variant="body2" color="gray">
                          Calendar
                      </Typography>
                  </MenuItem>
                  <MenuItem
                      onClick={() => scrollToSection('JamBoard')}
                      sx={{py: '6px', px: '12px'}}
                  >
                      <Typography variant="body2" color="gray">
                          JamBoard
                      </Typography>
                  </MenuItem>
                  <MenuItem
                      onClick={() => scrollToSection('Meetings')}
                      sx={{py: '6px', px: '12px'}}
                  >
                      <Typography variant="body2" color="gray">
                          Meetings
                      </Typography>
                  </MenuItem>
                  <Button variant="contained" endIcon={<LoginIcon />} >
                      Sign UP
                  </Button>
            </Box>

              {/*Mobile View Start*/}
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
                <Box sx={{ width: 250 }}>

                    <List>
                        {['Calendar', 'Jamboard'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign in
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



export default NavBar;
