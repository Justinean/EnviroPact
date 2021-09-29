import { makeStyles } from '@mui/styles';
import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

// imports for working on sidebar - delete unused 
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BorderAllRounded, BorderTopRounded } from '@mui/icons-material';


const useStyles = makeStyles({

  sidebar: {
    paddingTop:'20px',
    // width:'250px',
    minWidth:"190px",
    background:'#415D43',
    borderBottomLeftRadius:'15px',
    borderRight:'1px solid #CED0CE',
    "@media (max-width: 768px)": {
      width:'auto',
      borderBottomLeftRadius:'0px',
      paddingTop:'0px',
      },
  },
  main: {
    background:'#111D13',
    height:'90vh',
    borderBottomRightRadius:'15px',
    "@media (max-width: 768px)": {
      flexDirection: "column",
      borderBottomLeftRadius:'15px',
      },
      flex:'4'
  },
  flexcontainer: {
    display:'flex',
    flexDirection:'row',
    "@media (max-width: 768px)": {
      flexDirection:'column',
      height:'90vh',
      },
  },
  header: {
    display:'flex',
    flexDirection:'column',
    background:'#415D43',
    borderTopLeftRadius:'15px',
    borderTopRightRadius:'15px',
  },
  body: {
    display:'flex',
    flexDirection:'column',
    width:'95%',
    margin:'auto',
    marginTop:'8px',
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
    </div>
  );
}