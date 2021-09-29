import React from 'react';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, Typography } from '@mui/material';
import darkTheme from '../assets/themes/DarkTheme';


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
  const classes = useStyles()
  return (
    <ThemeProvider theme={darkTheme}> 
    <div className={classes.dashboard}>
        <Typography
        variant='h4'
        component='h2'>
        Welcome, TODO:Username
      </Typography>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;