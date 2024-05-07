import React from 'react';
import { Typography, Grid } from '@mui/material';
import ImgMediaCard from '../../ImgMediaCard';

const About = () => {
  return (
    <div>
      <Typography variant="h2" align="center" gutterBottom>
        <h3>About Us</h3>
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
      At ABM Real Estate, we pride ourselves on delivering exceptional real estate
       services tailored to meet your needs. Our team of dedicated professionals is committed to guiding you through
        every step of your real estate journey, whether you're buying, selling, or investing.

<h4>Our Mission</h4>
At ABM Real Estate, our mission is to provide you with the highest level of service and expertise in the real estate industry.
 We strive to exceed your expectations and make your real estate experience as seamless and enjoyable as possible.

 <h4>Our Team</h4>
The ABM Real Estate team is comprised of experienced and knowledgeable professionals who are passionate about helping you achieve your real estate goals.
 From our agents to our support staff, everyone at ABM Real Estate is dedicated to providing you with personalized service and expert advice.
<br></br><br></br>
 <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <ImgMediaCard
            image="/agent1.jpg"
            address={<a href="tel:+11231231234">(123) 123-1234</a>} // Phone number
            price="Jane Doe" //Name
            description="Experienced real estate professional with a family-focused approach. With 10 years in the industry, I aim to make your real estate 
            journey smooth and stress-free. Let's work together to find your dream home or sell your property."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ImgMediaCard
            image="/agent2.jpg"
            address={<a href="tel:+11231231234">(123) 123-1234</a>} // Phone number
            price="Sally Anderson" //Name
            description="Seasoned real estate expert with a focus on family values. With 7 years of experience, I'm dedicated to helping you find your
             perfect home or sell with ease. Let's make your real estate goals a reality."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ImgMediaCard
            image="/agent3.jpg"
            address={<a href="tel:+11231231234">(123) 123-1234</a>} // Phone number
            price="John Doe" //Name
            description="Family-centric real estate expert with 5 years experience. Let me guide you home with personalized service and a
             deep understanding of the local market."
          />
        </Grid>
      </Grid>

<h4>Why Choose ABM Real Estate?</h4>
Local Expertise: With our deep understanding of the local market, we can help you navigate the real estate landscape with confidence.
Customer Service: Your satisfaction is our top priority, and we are committed to providing you with the best possible experience.
Proven Results: Our track record of success speaks for itself, with many satisfied clients who have achieved their real estate goals with our help.
Get in Touch
Whether you're looking to buy, sell, or just have a question about the real estate market, the team at ABM Real Estate is here to help. Contact us today to
 learn more about how we can assist you with your real estate needs.
      </Typography>


    </div>
  );
};

export default About;