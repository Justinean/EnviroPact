import React from 'react';
// import ReactDOM from 'react-dom';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../eplogo.png'
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';


const useStyles = makeStyles((darkTheme) => {
  return {
    footer: {
      backgroundColor: "#415D43",
      display:'flex',
      flexDirection:'row',
      borderBottomLeftRadius:'15px',
      borderBottomRightRadius:'15px',
      borderTop: '1px solid #CED0CE',
      padding:'10px',
      color:'#CED0CE',
    },
    logo: {
      display:'inline-block',
      height:'70px',
      margin:'3px',
    },
    footerLinks:{
      display:'inline',
      marginLeft:'10px',
      textDecoration:'none',
      color:'#1E91D6',
      fontSize:'1rem',
    },
    footerLink:{
      display:'inline',
      marginLeft:'10px',
      textDecoration:'none',
      color:'#1E91D6',
      fontSize:'1rem',
    },

  }
})

export default function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container >
        <img src={logo} alt="EnviroPact" className={classes.logo} />
        <Typography  variant="h6" display="inline-flex" flexDirection="row" alignItems="center" >
          <CopyrightIcon /> 2021 EnviroPact
        </Typography>
        <div className={classes.footerLinks}>
        <a className={classes.footerLink} target="_blank" href="https://github.com/Justinean/EnviroPact"><GitHubIcon style={{ color:'#1E91D6', fontSize:'2rem', marginRight:'6px'}}/>EnviroPact on GitHub</a> 
        </div>
      </Container>
    </div>
  )
}