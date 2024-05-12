import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/components/Layout';
import Sale from './assets/pages/Sale';
import Sell from './assets/pages/Sell';
import About from './assets/pages/About';
import { Container, Grid } from '@mui/material';
import ImgMediaCard from './ImgMediaCard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="homes-for-sale" element={<Sale />} />
          <Route path="sell-your-home" element={<Sell />} />
          <Route path="about-us" element={<About />} />
        </Routes>

        <Container style={{ flexGrow: 1 }}>
          {/* <div style={{ textAlign: 'center' }}>
            <img
              src="/abmlogo.png"
              alt="ABM Real Estate Logo"
              height={100}
              width={400}
              style={{ padding: 10, display: 'block', margin: '0 auto' }}
            />
          </div> */}

          <h2
            style={{
              textAlign: 'center',
              backgroundImage: 'linear-gradient(to right, #008080, #00CED1)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Featured Listing
          </h2>

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
          </Grid>
        </Container>
      </Layout>
      </Router>
    );
  }
  export { App };