import React, { useState } from 'react';
import {
  Box,
  Container,
  ThemeProvider,
  Typography,
} from '@mui/material';
import './landingPage/landing.css';
import darkTheme from '../assets/themes/DarkTheme';
import { useQuery } from '@apollo/client';
import FollowedCompanies from '../components/FollowedCompanies';
import { GET_ME } from '../utils/queries';
import SearchAndCharts from '../components/SearchAndCharts'
import { CompanyDataContext } from '../utils/CompanyDataContext';

const Dashboard = () => {
  const { data } = useQuery(GET_ME);
  const userData = data?.me || {};

  const [dataForSearch, setDataForSearch] = useState('');

  const passViewCompany = (viewQuery) => {
    let dataToPass = [viewQuery];
    setDataForSearch(dataToPass);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className="main-container">
        <Typography
          variant='h4'
          component='h2'
          style={{ textAlign: 'left', marginTop: '35px', color: '#fff', fontStyle: '' }}>
          Welcome, {userData.username}!
        </Typography>
        <Box>
          <FollowedCompanies passViewCompany={passViewCompany} />
        </Box>
        <Box className="chartcontainer" style={{ marginBottom: '150px' }}>
          <SearchAndCharts dataForSearch={dataForSearch} useFullData={true} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;