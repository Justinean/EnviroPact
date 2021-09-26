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
import DataTable from '../../components/DataTable'



const Landing = () => {
  const data = [{
  
    "esg_id": 6909,
    "company_name": "Target Corporation",
    "exchange_symbol": "NYSE",
    "stock_symbol": "TGT",
    "environment_grade": "A",
    "environment_level": "Medium",
    "social_grade": "BBB",
    "social_level": "Medium",
    "governance_grade": "BBB",
    "governance_level": "Medium",
    "total_grade": "BBB",
    "total_level": "Excellent",
    "disclaimer": "ESG Enterprise's ESG Rating data (\"Scores\") are all based on public information and provided for informational purposes only. No member of ESG Enterprise or related parties make any prediction, warranty or representation whatsoever, expressly or impliedly, either as to the suitability of our Scores for any particular purposes or the validity of any derivative analysis or conclusion based on the Scores.",
    "last_processing_date": "14-09-2021",
    "environment_score": 500,
    "social_score": 337,
    "governance_score": 320,
    "total": 1157
  
}]


  return (
    <ThemeProvider theme={darkTheme}>
    <Container className="main-container">
      <Box sx={{ mr: 25, ml: 25 }} className="box">
        <Box className="card">
        <h3 className="enviro-header"> EnviroPact: </h3>

        <p className="enviro-para"> a pact to improve our environment, economy, and society by holding businesses, corporations, and governments accountable for their actions and damages. Our mission and goal at EnviroPact is to make information and data more accessible and transparent to the public so that together we can work towards creating a world with values.</p>
        </Box>
      </Box> 
      <Box sx={{ mr: 25, ml: 25 }} className="mission-box">
        <Box className="card">
        <h3 className="enviro-header"> Mission: </h3>

        <p className="enviro-para"> Our mission and goal at EnviroPact is to make information and data more accessible and transparent to the public so that together we can work towards creating a world with values.</p>
        </Box>
      </Box>   
      <Container className="chart-container">

      <Box className="chart-box">     
      <CustomCharts data={data}/>
      </Box>
      </Container>
      <Container style={{marginTop: '300px'}}>
        <Box>
      <DataTable data={data}/>
 
        </Box>
      </Container>

    </Container>

    </ThemeProvider>

  );
};

export default Landing;