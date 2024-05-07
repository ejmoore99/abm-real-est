import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FaxIcon from '@mui/icons-material/Fax';

function Sell() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Offer Text */}
      <Typography
        variant="body1"
        align="center"
        style={{
          marginTop: '20px',
          backgroundImage: 'linear-gradient(to right, #008080, #00CED1)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        <h3>We offer top dollar for your homes! Give us a call today<br />for a <strong>FREE</strong> consultation!</h3>
      </Typography>

      {/* Contact Information */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <EmailIcon sx={{ mb: 1 }} />
            <a href="mailto:info@abmrealestate.com"><Typography variant="body1">info@abmrealestate.com</Typography></a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PhoneIcon sx={{ mb: 1 }} />
            <a href="tel:+11234567890"><Typography variant="body1">(123) 456-7890</Typography></a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaxIcon sx={{ mb: 1 }} />
            <a href="tel:+11234567890"><Typography variant="body1">(123) 456-7890</Typography></a>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Sell;
