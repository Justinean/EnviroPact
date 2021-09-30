import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from '@mui/material';
import './landingPage/landing.css';
import darkTheme from '../assets/themes/DarkTheme';
import { useMutation, useQuery } from '@apollo/client';
import { FOLLOW_COMPANY } from '../utils/mutations';
import Auth from '../utils/auth';
import { getFollowedCompanyIds, followCompanyId } from '../utils/localStorage';
import Searchbar from '../components/Searchbar';
import CustomCharts from '../components/CompanyChart';
import DataTable from '../components/DataTable';
import { mainApiSearch } from '../utils/API';
import FollowedCompanies from '../components/FollowedCompanies';
import { GET_ME } from '../utils/queries';
import SearchAndCharts from '../components/SearchAndCharts'

const useStyles = makeStyles((darkTheme) => {
  return {
    dashboard: {
      background: "#415D43",
      borderRadius: '8px',
      margin: '30px',
      color: "#CED0CE",
      color: "white",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      "@media (min-width: 800px)": {
        backgroundColor: " "
      },
    },
    button: {
      color: "black"
    }
  }
})

const Dashboard = () => {
  const [savedCompanyIds, setSavedCompanyIds] = useState(getFollowedCompanyIds());
  const [followCompany, { error }] = useMutation(FOLLOW_COMPANY);
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};
  console.log("User Data: ", userData);

  const classes = useStyles()

  // dummy data
  // TODO comment back when done styling
   const searchData = {
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

  useEffect(() => {
    followCompanyId(savedCompanyIds)
  }, [savedCompanyIds]);

  const onFollow = async (e) => {
    try {
      if (!Auth.loggedIn()) {
        return;
      }
      const data = JSON.parse(e.target.getAttribute('data'));
      await followCompany({ variables: { ...data } });
      setSavedCompanyIds([...savedCompanyIds, data.companyId]);
    } catch (err) {
      console.error(err)
    }
  }

  // State that holds the API call that comes in from the searchbar.
  const [apiSearchData, setApiSearchData] = useState('');
  // The function that will take the input from the searchbar and update the state for the landing API call.
  const sbDataFunction = (sbData) => {
    setApiSearchData(sbData);
  };

  // This is the state that will hold the data from the API call.
  // TODO uncomment back when done styling
  // const [searchData, setSearchData] = useState([]);

  // This function will run the API call and set state of the data.
  const handleSearch = async (event) => {
    event.preventDefault();
    if (!apiSearchData) {
      return false;
    }

    try {
      const response = await mainApiSearch(apiSearchData[0]);
      if (!response.ok) {
        throw new Error('Something went wrong with the search.');
      }

      const jsonData = await response.json();
      const company = jsonData[0];
      // TODO uncomment back when done styling
      // const companyData = {
      //   companyId: company.esg_id,
      //   companyName: company.company_name,
      //   exchangeSymbol: company.exchange_symbol,
      //   stockSymbol: company.stock_symbol,
      //   environmentGrade: company.environment_grade,
      //   environmentLevel: company.environment_level,
      //   socialGrade: company.social_grade,
      //   socialLevel: company.social_level,
      //   governanceGrade: company.governance_grade,
      //   governanceLevel: company.governance_level,
      //   totalGrade: company.total_grade,
      //   totalLevel: company.total_level,
      //   lastProcessingDate: company.last_processing_date,
      //   environmentScore: company.environment_score,
      //   socialScore: company.social_score,
      //   governanceScore: company.governance_score,
      //   total: company.total,
      // };

      // setSearchData(companyData);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <Typography
        variant='h4'
        component='h2'>
        LOADING...
      </Typography>
    )
  }

  return (

    // Previous return, commented out by bp and replaced by same as Landing page SearchAndCharts so that component can house multiple variable ways to act. TODO Delete if not needed.

    // <ThemeProvider theme={darkTheme}>
    //   <div className={classes.dashboard}>
    //     <Typography
    //       variant='h4'
    //       component='h2'>
    //       Welcome, {userData.username}
    //     </Typography>
    //     <p>You are searching for the company: {apiSearchData[1]} with the API call: {apiSearchData[0]}.</p>
    //     <Searchbar sbDataFunction={sbDataFunction} />
    //     <Button onClick={handleSearch}>Search</Button>
    //     <Container className="chart-container">
    //       <Box className="chart-box">
    //         <CustomCharts data={searchData} />
    //         <FollowedCompanies data={searchData} />
    //       </Box>
    //     </Container>
    //     <Container style={{ marginTop: '300px' }}>
    //       <Box>
    //         <DataTable data={searchData} />
    //       </Box>
    //     </Container>
    //   </div>
    //   {Auth.loggedIn() && !savedCompanyIds.find(element => element === searchData.companyId) && searchData.companyId ? <button onClick={onFollow} data={JSON.stringify(searchData)}>Follow</button> : null}
    // </ThemeProvider>



    <ThemeProvider theme={darkTheme}>
      <Container className="main-container">
        
        
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

export default Dashboard;