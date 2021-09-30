import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import {  } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Searchbar from '../components/Searchbar';
import { mainApiSearch } from '../utils/API';
import CompanyChart from '../components/CompanyChart'
import DataTable from '../components/DataTable'




const useStyles = makeStyles({
  root: {
    backgroundColor: '#CED0CE',
    border: ' 2px solid #111D13',
    color: '#111D13',
  },
  search: {
    backgroundColor: '#CED0CE',
    color: '#111D13',
    '&:hover': {
      backgroundColor: '#1E91D6',
      color: 'snow'
    }
  },
  cell: {
    color: '#111D13',
  },
  box: {
    marginBottom: '20px',
  },
  charts: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    "@media (max-width: 1200px)": {
      flexDirection:'column',
    },
  },
  searchButton: {
    marginTop:'8px',
    border:'2px solid black',
    background:'#415D43',
    color:'#CED0CE',
    fontWeight:'700',
  }
})


export default function SearchAndCharts({ data }) {
    const classes = useStyles(data)


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
  
      <Box sx={{
        width: '100%',
        height: 'auto',
        marginBottom: '100px',
        color: '#111D13',
      }}>
        <Box sx={{ marginBottom: '100px'}}>
          <p>You are searching for the company: {apiSearchData[1]} with the API call: {apiSearchData[0]}.</p>
          <Searchbar sbDataFunction={sbDataFunction} />
          <Button className={classes.searchButton} onClick={handleSearch}>Search</Button>
        </Box>
        <Container sx={{ marginLeft: '100px'}}>
         <h1>{data.companyName ? data.companyName : "Loading"}</h1>
          <div className={classes.charts}>
            <div >
              <CompanyChart data={data} />
            </div>
            <div>
              <DataTable data={data} />
            </div>
          </div>
        </Container>



      </Box>
  
  
  
    );
  }