import React, { useContext, useEffect, useState } from "react";
import { Box, /* Button, */ Container/* , Typography */ } from "@material-ui/core";
import { } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Searchbar from '../components/Searchbar';
import CompanyChart from '../components/CompanyChart';
import DataTable from '../components/DataTable';
import { CompanyDataContext } from "../utils/CompanyDataContext";
import { FOLLOW_COMPANY } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { followCompanyId, getFollowedCompanyIds } from '../utils/localStorage';
import Auth from '../utils/auth';

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

export default function SearchAndCharts({ data }) {
  // dummy data
  const searchData = {
    companyId: 2005,
    companyName: "Test4",
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
  // const { data: searchData } = useContext(CompanyDataContext);
  const classes = useStyles(data)
  const [savedCompanyIds, setSavedCompanyIds] = useState(getFollowedCompanyIds());
  const [followCompany, /* { error } */] = useMutation(FOLLOW_COMPANY);

  // State that holds the API call that comes in from the searchbar.
  const [apiSearchData, setApiSearchData] = useState('');
  // The function that will take the input from the searchbar and update the state for the landing API call.
  const sbDataFunction = (sbData) => {
    setApiSearchData(sbData);
  };

  useEffect(() => {
    followCompanyId(savedCompanyIds)
  }, [savedCompanyIds]);

  const onFollow = async () => {
    try {
      if (!Auth.loggedIn()) {
        return;
      }
      await followCompany({ variables: { ...searchData } });
      setSavedCompanyIds([...savedCompanyIds, searchData.companyId]);
    } catch (err) {
      console.error(err)
    }
  }

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
        {Auth.loggedIn() && !savedCompanyIds.find(element => element === searchData.companyId) && searchData.companyId ? <button style={{ fontSize: '1.25rem', padding:'6px', marginBottom:'30px', backgroundColor:'#E18335', cursor:'pointer', borderRadius:'7px',}} onClick={onFollow}>Follow</button> : null}
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