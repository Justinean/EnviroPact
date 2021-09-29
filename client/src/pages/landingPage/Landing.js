import React, { useState } from 'react';
import CustomCharts from '../../components/CompanyChart';
import {
  ThemeProvider,
  Container,
  Card,
  Box,
  Button,
} from '@mui/material';

import darkTheme from '../../assets/themes/DarkTheme';
import './landing.css';
import DataTable from '../../components/DataTable';
import Searchbar from '../../components/Searchbar';
import { mainApiSearch } from '../../utils/API';
import companySearchData from '../../components/stockData';
import FollowedCompanies from '../../components/FollowedCompanies';

const Landing = () => {
  // dummy data
  const data = {
    companyId: 6909,
    companyName: "Target Corporation",
    exchangeSymbol: "NYSE",
    stockSymbol: "TGT",
    environmentGrade: "A",
    environmentLevel: "Medium",
    socialGrade: "BBB",
    socialLevel: "Medium",
    governanceGrade: "BBB",
    governanceLevel: "Medium",
    totalGrade: "BBB",
    totalLevel: "Excellent",
    lastProcessingDate: "14-09-2021",
    environmentScore: 500,
    socialScore: 337,
    governanceScore: 320,
    total: 1157,
  };
  // State that holds the API call that comes in from the searchbar.
  const [apiSearchData, setApiSearchData] = useState('');
  // The function that will take the input from the searchbar and update the state for the landing API call.
  const sbDataFunction = (sbData) => {
    setApiSearchData(sbData);
  };

  // This is the state that will hold the data from the API call.
  // const [data, setData] = useState([]);

  // This function will run the API call and set state of the data.
  const handleSearch = async (event) => {
    event.preventDefault();
    /* if (!apiSearchData) {
      return false;
    } */

    try {
      /* const response = await mainApiSearch(apiSearchData[0]);
      if (!response.ok) {
        throw new Error('Something went wrong with the search.');
      }

      const jsonData = await response.json();
      const company = jsonData[0]; */
      /* const companyData = {
        companyId: company.esg_id,
        companyName: company.company_name,
        exchangeSymbol: company.exchange_symbol,
        stockSymbol: company.stock_symbol,
        environmentGrade: company.environment_grade,
        environmentLevel: company.environment_level,
        socialGrade: company.social_grade,
        socialLevel: company.social_level,
        governanceGrade: company.governance_grade,
        governanceLevel: company.governance_level,
        totalGrade: company.total_grade,
        totalLevel: company.total_level,
        lastProcessingDate: company.last_processing_date,
        environmentScore: company.environment_score,
        socialScore: company.social_score,
        governanceScore: company.governance_score,
        total: company.total,
      }; */

      // setData(companyData);
    } catch (err) {
      console.error(err);
    }
  };

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
        <p>You are searching for the company: {apiSearchData[1]} with the API call: {apiSearchData[0]}.</p>
        <Searchbar sbDataFunction={sbDataFunction} />
        <Button onClick={handleSearch}>Search</Button>
        <Container className="chart-container">

          <Box className="chart-box">
            {/* <CustomCharts data={data} /> */}
            <FollowedCompanies companySearchData={ companySearchData } />
          </Box>
        </Container>
        <Container style={{ marginTop: '300px' }}>
          <Box>
            {/* <DataTable data={data} /> */}

          </Box>
        </Container>

      </Container>

    </ThemeProvider>

  );
};

export default Landing;