import React, { useState } from 'react';
import {
  Box,
  Container,
  ThemeProvider,
} from '@mui/material';

import './landing.css';
import darkTheme from '../../assets/themes/DarkTheme';
import SearchAndCharts from '../../components/SearchAndCharts'
// import { mainApiSearch } from '../../utils/API';

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
        <div className="card-container">
          <Box className="card enviro">
            <h3 className="enviro-header"> <span className="secondaryColor">EnviroPact: </span></h3> 
            <p className="enviro-para"> A pact to improve our environment, economy, and society by holding businesses, corporations, and governments accountable for their actions and damages. Our mission and goal at EnviroPact is to make information and data more accessible and transparent to the public so that together we can work towards creating a world with values.</p>

          </Box>
        
        
          <Box className="card mission">
          <h3 className="enviro-header"> <span className="secondaryColor">Mission: </span></h3> 
            <p className="enviro-para"> Our mission and goal at EnviroPact is to make information and data more accessible and transparent to the public so that together we can work towards creating a world with values.</p>
          </Box>

          <Box className="info-para">
            {/* <h3 className="enviro-header"> Mission: </h3> */}
            
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
        
        {/* <p>You are searching for the company: {apiSearchData[1]} with the API call: {apiSearchData[0]}.</p>
        <Searchbar sbDataFunction={sbDataFunction} />
        <Button onClick={handleSearch}>Search</Button> */}
        
        {/* <Container style={{ marginTop: '400px', marginBottom: '150px' }}> */}
          <Box className="chartcontainer" style={{ marginBottom: '150px'}}>
            {/* <DataTable data={data} /> */}
            <SearchAndCharts data={data} />
          </Box>
        {/* </Container> */}
      </Container>
    </ThemeProvider>
  );
};

export default Landing;