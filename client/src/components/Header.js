import React from 'react';
// import ReactDOM from 'react-dom';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../glow.png'


const useStyles = makeStyles((darkTheme) => {
  return {
    main: {
      color: "#CED0CE",
      borderBottom: '1px solid #CED0CE',
    },
    logo: {
      height:'150px',
      margin:'7px',
    }
  }
})

export default function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container >
<div>
        <img src={logo} alt="EnviroPact" className={classes.logo} />
</div>
        {/* <Typography
          my={2}
          variant='h3'
          component='h2'>
          EnviroPact
        </Typography> */}
      </Container>
    </div>
  )
}