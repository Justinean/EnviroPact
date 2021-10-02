import { makeStyles } from '@mui/styles';
import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles({

  sidebar: {
    paddingTop: '20px',
    minWidth: "190px",
    background: '#415D43',
    borderRight: '1px solid #CED0CE',
    "@media (max-width: 768px)": {
      position: 'sticky',
      top: '0',
      zIndex: '999',
      borderBottom: '1px solid #CED0CE',
      boxShadow: '0 19px 19px -15px #000',
    },
  },
  main: {
    background: '#111D13',

    "@media (max-width: 768px)": {
      flexDirection: "column",

    },
    flex: '4'
  },
  flexcontainer: {
    display: 'flex',
    flexDirection: 'row',
    "@media (max-width: 768px)": {
      flexDirection: 'column',
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    background: '#415D43',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    margin: 'auto',
    marginTop: '8px',
  }
})

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.flexcontainer}>
        <div className={classes.sidebar}>
          <Navbar />
        </div>
        <div className={classes.main}>
          {/* include all children of Layout.js in App.js */}
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};