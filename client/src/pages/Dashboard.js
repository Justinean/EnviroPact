import React, {useState, useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, Typography } from '@mui/material';
import darkTheme from '../assets/themes/DarkTheme';
import { useMutation } from '@apollo/client';
import { FOLLOW_COMPANY } from '../utils/mutations';
import Auth from '../utils/auth';
import { getFollowedCompanyIds, followCompanyId } from '../utils/localStorage';

const useStyles = makeStyles((darkTheme) => {
  return {
  dashboard: {
    padding:'30px 0',
    margin:'25px',
    background:"#415D43",
    color:"#CED0CE",
    color: "white",
    height:"auto",
    display:'flex',
    flexDirection:'column',
    borderRadius:'20px',
    // justifyContent:'center',
    width:'80vw',
    "@media (min-width: 800px)": {
      backgroundColor: " "
      },
  },
  
}
})

const Dashboard = () => {
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

  const [savedCompanyIds, setSavedCompanyIds] = useState(getFollowedCompanyIds());

  useEffect(() => {
    followCompanyId(savedCompanyIds)
  }, [savedCompanyIds]);

  const classes = useStyles()

  const [followCompany, {error}] = useMutation(FOLLOW_COMPANY);

  const onFollow = async e => {
    try {
      if (!Auth.loggedIn()) {
        return;
      }
      const data = JSON.parse(e.target.getAttribute('data'));
      await followCompany({variables: {...data}});
      setSavedCompanyIds([...savedCompanyIds, data.companyId]);
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <ThemeProvider theme={darkTheme}> 
    <div className={classes.dashboard}>
        <Typography
        variant='h4'
        component='h2'>
        Welcome, TODO:Username
      </Typography>
      </div>
      {Auth.loggedIn() ? <button onClick={onFollow} data={JSON.stringify(data)}>Follow</button> : null}
    </ThemeProvider>
  );
};

/*
  Function for removing a company:
  import {useMutation} from '@apollo/client';
  import {UNFOLLOW_COMPANY} from '../utils/mutations';

  const [unfollowCompany, {error}] = useMutation(UNFOLLOW_COMPANY);

  const onUnfollow = async e => {
    if (!Auth.loggedIn()) {
        return;
      }
    const companyId = JSON.parse(e.target.getAttribute('data'));
    await unfollowCompany({variables: {companyId}});
    removeCompanyId(companyId)
  }
*/

export default Dashboard;