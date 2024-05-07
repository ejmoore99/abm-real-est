import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          <img src="/images/abmlogo2.png" alt="Your Logo" height={35} width={35} />
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Homes For Sale</Button>
        <Button color="inherit">Sell Us Your Home</Button>
        <Button color="inherit">About Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;