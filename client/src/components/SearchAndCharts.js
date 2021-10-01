import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Searchbar from '../components/Searchbar';
import { mainApiSearch } from '../utils/API';
import CompanyChart from '../components/CompanyChart';
import DataTable from '../components/DataTable';
import { APIClickable } from "./APIClickable";
import { CompanyDataContext } from "../utils/CompanyDataContext";

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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    "@media (max-width: 1200px)": {
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  searchButton: {
    marginTop: '8px',
    border: '2px solid black',
    background: '#415D43',
    color: '#CED0CE',
    fontWeight: '700',
  }
})


export default function SearchAndCharts({ data, dataForSearch }) {
  const {data: searchData} = useContext(CompanyDataContext);
  const classes = useStyles(data)

  // State that holds the API call that comes in from the searchbar.
  const [apiSearchData, setApiSearchData] = useState('');
  // The function that will take the input from the searchbar and update the state for the landing API call.
  const sbDataFunction = (sbData) => {
    setApiSearchData(sbData);
  };

  return (

    <Box sx={{
      width: '100%',
      height: 'auto',
      marginBottom: '100px',
      color: '#111D13',
    }}>
      <Box sx={{ marginBottom: '40px', paddingTop: '20px' }}>
        <p>You are searching for the company: {apiSearchData[1]} with the API call: {apiSearchData[0]}.</p>
        <Searchbar />
      </Box>
      <Container sx={{ marginLeft: '100px' }}>
        <h1>{searchData.companyName ? searchData.companyName : null }</h1>
        <div className={classes.charts}>
          <div >
            <CompanyChart data={searchData} />
          </div>
          <div>
            <DataTable data={searchData} />
          </div>
        </div>
      </Container>



    </Box>



  );
}