import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            <img src="/abmlogo2.png" alt="Your Logo" height={35} width={35} />
          </Typography>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/homes-for-sale" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Homes For Sale</Button>
          </Link>
          <Link to="/sell-your-home" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Sell Us Your Home</Button>
          </Link>
          <Link to="/about-us" style={{ textDecoration: 'none' }}>
            <Button color="inherit">About Us</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Container style={{ flexGrow: 1 }}>
        <div style={{ textAlign: 'center' }}>
          <img
            src="/abmlogo.png"
            alt="ABM Real Estate Logo"
            height={100}
            width={400}
            style={{ padding: 10, display: 'block', margin: '0 auto' }}
          />
        </div>



      </Container>

      {children}

      <AppBar position="static" style={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">About Us</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Layout;