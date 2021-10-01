import React, { useState/* , useEffect */ } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Box,
  // Button,
  Container,
  ThemeProvider,
  Typography,
} from '@mui/material';
import './landingPage/landing.css';
import darkTheme from '../assets/themes/DarkTheme';
import {/*  useMutation, */ useQuery } from '@apollo/client';
// import { FOLLOW_COMPANY } from '../utils/mutations';
// import Auth from '../utils/auth';
// import { getFollowedCompanyIds, followCompanyId } from '../utils/localStorage';
// import Searchbar from '../components/Searchbar';
// import CustomCharts from '../components/CompanyChart';
// import DataTable from '../components/DataTable';
// import { mainApiSearch } from '../utils/API';
import FollowedCompanies from '../components/FollowedCompanies';
import { GET_ME } from '../utils/queries';
import SearchAndCharts from '../components/SearchAndCharts'
import { CompanyDataContext } from '../utils/CompanyDataContext';

/* const useStyles = makeStyles((darkTheme) => {
  return {
    dashboard: {
      background: "#415D43",
      borderRadius: '8px',
      margin: '30px',
      // color: "#CED0CE",
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
}) */

const Dashboard = () => {
  // const [savedCompanyIds, setSavedCompanyIds] = useState(getFollowedCompanyIds());
  // const [followCompany, /* { error } */] = useMutation(FOLLOW_COMPANY);
  const { /* loading, */ data } = useQuery(GET_ME);
  const userData = data?.me || {};

  // const classes = useStyles()

  /* useEffect(() => {
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
  } */
  const [dataForSearch, setDataForSearch] = useState('');

  const passViewCompany = (viewQuery) => {
    console.log("ViewQuery: ", viewQuery);
    let dataToPass = [viewQuery];
    setDataForSearch(dataToPass);
    // setApiSearchData(viewQuery);
    // handleSearch(viewQuery);
  };

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
          <Typography
            variant='h4'
            component='h2'>
            Welcome, {userData.username}
          </Typography>

          {/* <Container style={{ marginTop: '400px', marginBottom: '150px' }}> */}
          <Box>
            <FollowedCompanies passViewCompany={passViewCompany} />
          </Box>
          <Box className="chartcontainer" style={{ marginBottom: '150px' }}>
            <SearchAndCharts data={data} dataForSearch={dataForSearch} useFullData={true}/>
          </Box>
          {/* </Container> */}
        </Container>
    </ThemeProvider>
  );
};

export default Dashboard;