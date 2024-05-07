import React from 'react';
import { Grid } from '@mui/material'; // Import the Grid component
import ImgMediaCard from './ImgMediaCard'; // Import the ImgMediaCard component

function ImageCard({ image, address, price, description }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <ImgMediaCard 
        image={image}
        address={address}
        price={price} 
        description={description}
      />
    </Grid>
  );
}

export default ImageCard;