import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import './landingPage/landing.css';
import { useQuery } from '@apollo/client';
import FollowedCompanies from '../components/FollowedCompanies';
import { GET_ME } from '../utils/queries';
import SearchAndCharts from '../components/SearchAndCharts'

const Dashboard = () => {
  const { data } = useQuery(GET_ME);
  const userData = data?.me || {};

  const [dataForSearch, setDataForSearch] = useState('');

  const passViewCompany = (viewQuery) => {
    let dataToPass = [viewQuery];
    setDataForSearch(dataToPass);
  };

  return (
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
        <SearchAndCharts data={data} dataForSearch={dataForSearch} useFullData={true} />
      </Box>
    </Container>
  );
};

export default Dashboard;