// This is the initial page for the website aka (The home page?)

import React from 'react';
import CustomCharts from '../../components/CompanyChart'
import {
  ThemeProvider,
  Container,
  Card,
  Box,
} from '@mui/material'

import darkTheme from '../../assets/themes/DarkTheme'
import './landing.css'
const Landing = () => {



  return (
    <ThemeProvider theme={darkTheme}>
    <Container className="main-container">
      <Box className="box">
        <Box className="card">
        <h3 className="enviro-header"> EnviroPact: </h3>

        <p className="enviro-para"> a pact to improve our environment, economy, and society by holding businesses, corporations, and governments accountable for their actions and damages. Our mission and goal at EnviroPact is to make information and data more accessible and transparent to the public so that together we can work towards creating a world with values.</p>
        </Box>
      </Box> 
      <Box className="mission-box">
        <Box className="card">
        <h3 className="enviro-header"> Mission: </h3>

        <p className="enviro-para"> Our mission and goal at EnviroPact is to make information and data more accessible and transparent to the public so that together we can work towards creating a world with values.</p>
        </Box>
      </Box>   
      <Container className="chart-container">

      <Box className="chart-box">     
      <h3 className="sample-chart-h3">Sample Chart</h3>
      <CustomCharts />
      </Box>
      </Container>
    </Container>
    </ThemeProvider>

  );
};

export default Landing;