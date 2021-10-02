import React from 'react';
// import ReactDOM from 'react-dom';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../eplogo.png'
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';


const useStyles = makeStyles({
  footerFlex: {
    backgroundColor: "#415D43",
    display: 'flex',
    flexDirection: 'row',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',
    borderTop: '1px solid #CED0CE',
    padding: '10px',
    marginBottom: '10px',
    color: '#CED0CE',
    alignItems: 'center',
    justifyContent: 'center',
    "@media (max-width: 768px)": {
      flexDirection: 'column',
    },
  },
  logo: {
    display: 'inline-block',
    height: '70px',
  },
  footerLink: {
    textDecoration: 'none',
    color: '#E18335',
    fontSize: '1rem',
  },
  footer1: {
    display: 'flex',
    flexDirection: 'row',
    "@media (max-width: 768px)": {
      flexDirection: 'column',
    },
  },
  footer2: {
    display: 'flex',
    marginLeft: '15px',
    marginRight: '15px',
    color: '#E18335',
  },
})

export default function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.footerFlex}>

      <div className={classes.footer1}>
        <img src={logo} alt="EnviroPact" className={classes.logo} />
      </div>
      <div className={classes.footer2}>
        <Typography variant="h6" display="inline-flex" flexDirection="row" alignItems="center" paddingLeft="10px">
          <CopyrightIcon /> 2021 EnviroPact
        </Typography>

        <a className={classes.footerLink} target="_blank" href="https://github.com/Justinean/EnviroPact"><GitHubIcon style={{ color: '#E18335', fontSize: '3rem', margin: '10px' }} /></a>

      </div>


    </div>
  )
}