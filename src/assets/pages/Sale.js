import React from 'react';
import { Container, Grid } from '@mui/material';
import ImgMediaCard from '../../ImgMediaCard';

function Sale() {
  return (
      <Container style={{ flexGrow: 1 }}>
        
       

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <ImgMediaCard 
              image="/home1.jpg"
              address="103 Sally Ct | Raleigh, NC | 27523"
              price="$200,000" 
              description={
                <div>
          <ul>
            <li><strong>3 Bedrooms:</strong> Generous space and natural light make each bedroom cozy and inviting.</li>
            <li><strong>2 Bathrooms:</strong> Enjoy convenience and luxury with two beautifully appointed bathrooms.</li>
            <li><strong>Open Concept Living:</strong> The open-concept layout seamlessly connects the living room, dining area, and kitchen for easy entertaining.</li>
            <li><strong>Modern Kitchen:</strong> Sleek countertops, stainless steel appliances, and plenty of storage make cooking a pleasure.</li>
            <li><strong>Abundant Natural Light:</strong> Large windows brighten every corner of the house.</li>
            <li><strong>Private Outdoor Space:</strong> Relax and unwind in the spacious backyard.</li>
            <li><strong>Energy Efficiency:</strong> Modern appliances and insulation help reduce utility costs.</li>
          </ul>
          <p>
          <center><strong>Property Features:</strong></center>
            Size: Approximately 1,000 sq ft. <br />
            Lot Size: 2,434 sq ft. <br />
            Year Built: 1986 <br />
            Garage: No <br />
            Location: Close to the Crabtree Valley Mall. <br />
            Contact Jane Doe for details.
          </p>
        </div>
      }
    />
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <ImgMediaCard 
        image="/home2.jpg"
        address="532 Mayberry Dr | Raleigh, NC | 27869"
      price="$250,000" 
      description={
        <div>
          <ul>
            <li><strong>4 Bedrooms:</strong> Generous space and natural light make each bedroom cozy and inviting.</li>
            <li><strong>3 Bathrooms:</strong> Enjoy convenience and luxury with two beautifully appointed bathrooms.</li>
            <li><strong>Open Concept Living:</strong> Seamlessly connect your living room, dining area, and kitchen for relaxed entertaining.</li>
            <li><strong>Modern Kitchen:</strong> Cook with flair in a modern kitchen equipped with stainless steel appliances, quartz countertops, and custom cabinetry.</li>
            <li><strong>Private Outdoor Space:</strong> Unwind in a private outdoor oasis boasting a cozy patio, landscaped garden, and space for outdoor dining.</li>
          </ul>
          <p>
          <center><strong>Property Features:</strong></center>
            Size: Approximately 1,000 sq ft. <br />
            Lot Size: 1,500 sq ft <br />
            Year Built: 2015 <br />
            Garage: Yes (2-car) <br />
            Location: Conveniently situated in a family-friendly neighborhood. <br />
            Contact Sally Anderson for details.
          </p>
        </div>
      }
    />
  </Grid>
  {/* Add four more ImgMediaCard components */}

  <Grid item xs={12} sm={6} md={4}>
    <ImgMediaCard 
        image="/home3.jpg"
        address="101 Tech Run Drive | Raleigh, NC | 27618"
      price="$120,000" 
      description={
        <div>
          <ul>
            <li><strong>3 Bedrooms:</strong> Generous space and natural light make each bedroom cozy and inviting.</li>
            <li><strong>2 Bathrooms:</strong> Enjoy convenience and luxury with two beautifully appointed bathrooms.</li>
            <li><strong>Open Concept Living:</strong> The open-concept layout seamlessly connects the living room, dining area, and kitchen for easy entertaining.</li>
            <li><strong>Modern Kitchen:</strong> Sleek countertops, stainless steel appliances, and plenty of storage make cooking a pleasure.</li>
            <li><strong>Abundant Natural Light:</strong> Large windows brighten every corner of the house.</li>
            <li><strong>Private Outdoor Space:</strong> Relax and unwind in the spacious backyard.</li>
            <li><strong>Energy Efficiency:</strong> Modern appliances and insulation help reduce utility costs.</li>
          </ul>
          <p>  
          <center><strong>Property Features:</strong></center>
            Size: Approximately 1,000 sq ft. <br />
            Lot Size: 2,434 sq ft. <br />
            Year Built: 1986 <br />
            Garage: No <br />
            Location: Close to the Crabtree Valley Mall. <br />
            Contact John Doe for details.
          </p>
        </div>
      }
    />
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <ImgMediaCard 
        image="/home4.jpg"
        address="103 Sally Ct | Raleigh, NC | 27523"
      price="$205,000" 
      description={
        <div>
          <ul>
            <li><strong>3 Bedrooms:</strong> Generous space and natural light make each bedroom cozy and inviting.</li>
            <li><strong>2 Bathrooms:</strong> Enjoy convenience and luxury with two beautifully appointed bathrooms.</li>
            <li><strong>Open Concept Living:</strong> The open-concept layout seamlessly connects the living room, dining area, and kitchen for easy entertaining.</li>
            <li><strong>Modern Kitchen:</strong> Sleek countertops, stainless steel appliances, and plenty of storage make cooking a pleasure.</li>
            <li><strong>Abundant Natural Light:</strong> Large windows brighten every corner of the house.</li>
            <li><strong>Private Outdoor Space:</strong> Relax and unwind in the spacious backyard.</li>
            <li><strong>Energy Efficiency:</strong> Modern appliances and insulation help reduce utility costs.</li>
          </ul>
          <p>
          <center><strong>Property Features:</strong></center>
            Size: Approximately 1,000 sq ft. <br />
            Lot Size: 2,434 sq ft. <br />
            Year Built: 1986 <br />
            Garage: No <br />
            Location: Close to the Crabtree Valley Mall. <br />
            Contact Jane Doe for details.
          </p>
        </div>
      }
    />
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <ImgMediaCard 
        image="/home5.jpg"
        address="532 Mayberry Dr | Raleigh, NC | 27869"
      price="$275,000" 
      description={
        <div>
          <ul>
            <li><strong>4 Bedrooms:</strong> Generous space and natural light make each bedroom cozy and inviting.</li>
            <li><strong>3 Bathrooms:</strong> Enjoy convenience and luxury with two beautifully appointed bathrooms.</li>
            <li><strong>Open Concept Living:</strong> Seamlessly connect your living room, dining area, and kitchen for relaxed entertaining.</li>
            <li><strong>Modern Kitchen:</strong> Cook with flair in a modern kitchen equipped with stainless steel appliances, quartz countertops, and custom cabinetry.</li>
            <li><strong>Private Outdoor Space:</strong> Unwind in a private outdoor oasis boasting a cozy patio, landscaped garden, and space for outdoor dining.</li>
          </ul>
          <p>
          <center><strong>Property Features:</strong></center>
            Size: Approximately 1,000 sq ft. <br />
            Lot Size: 1,500 sq ft <br />
            Year Built: 2015 <br />
            Garage: Yes (2-car) <br />
            Location: Conveniently situated in a family-friendly neighborhood. <br />
            Contact John Doe for details.
          </p>
        </div>
      }
    />
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <ImgMediaCard 
        image="/home6.jpg"
        address="478 Emily Way | Knightdale, NC | 27221"
      price="$310,000" 
      description={
        <div>
  <ul>
    <li>
      <strong><li>4 Bedrooms:</li></strong> Experience luxury living in four spacious bedrooms, each offering a tranquil retreat from the hustle and bustle of city life. <br />
      <strong><li>3 Bathrooms:</li></strong> Indulge in relaxation with three elegantly appointed bathrooms featuring premium fixtures and finishes. <br />
      <strong><li>Gourmet Kitchen:</li></strong> The gourmet kitchen is equipped with top-of-the-line appliances, custom cabinetry, and a large island, perfect for culinary enthusiasts. <br />
      <strong><li>Expansive Windows:</li></strong> Floor-to-ceiling windows throughout the home flood the space with natural light. <br />
    </li>
  </ul>
  <p>
  <center><strong>Property Features:</strong></center>
    Size: Approximately 1,700 sq ft. <br />
    Lot Size: 1,700 sq ft. <br />
    Year Built: 2016 <br />
    Garage: Yes (3 cars) <br />
    Location: Serene neighborhood with easy access to nature trails and recreational facilities. <br />
    Contact Sarah Anderson for inquiries.
  </p>
</div>
      }
    />
  </Grid>
</Grid>
</Container>

  );
}

export default Sale;