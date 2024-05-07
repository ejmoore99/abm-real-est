import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        <Button color="inherit">Contact</Button>
        <Button color="inherit">About Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;