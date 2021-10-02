import React from 'react';
import {
  Box,
  Container,
} from '@mui/material';
import './landing.css';
import SearchAndCharts from '../../components/SearchAndCharts'

const Landing = () => {
  return (

    <Container className="main-container">
      <div className="card-container">
        <Box className="card enviro">
          <h3 className="enviro-header"> <span className="secondaryColor">EnviroPact: </span></h3>
          <p className="enviro-para"> A pact to improve our environment, economy, and society by holding businesses, corporations, and governments accountable for their actions and damages.</p>
        </Box>
        <Box className="card mission">
          <h3 className="enviro-header"> <span className="secondaryColor">Mission: </span></h3>
          <p className="enviro-para"> Our mission and goal at EnviroPact is to make information and data more accessible and transparent to the public so that together we can work towards creating a world with values.</p>
        </Box>
        <Box className="info-para">
          <p> EnviroPact uses the ESG Enterprise API which provides businesses and corporations ratings and scores that pertain to their environmental, social and governance impacts and practices.</p>
          <p>
            <span className="bold secondaryColor">Environmental</span> scores and ratings are based on the organization's climate actions, biodiversity, wastewater management, GHG emissions and air pollution.</p>
          <p>
            <span className="bold secondaryColor">Social</span> scores and ratings are based on the organization's diversity, community relations, workplace safety, employee health, training, and privacy.</p>
          <p>
            <span className="bold secondaryColor">Governance</span> scores and ratings are based on the organization's board diversity, fair wage practices, info disclosure, internal controls and accounting practices.</p>
          <p>
            ESG ratings help provide us with a better understanding of an organization's values and allow us to see if our values align.</p>
          <p>
            We at EnviroPact value our environment, our societies, and our future. We hope that we can encourage all humankind to take action and create a better world for our future.
          </p>
        </Box>
      </div>
      <Box className="chartcontainer" style={{ marginBottom: '150px' }}>
        <SearchAndCharts />
      </Box>
    </Container>

  );
};

export default Landing;