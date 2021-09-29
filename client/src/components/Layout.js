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

// const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    background:"#111D13",
    border:"",
    borderRadius:"",
    height:'100%',
    width:'100%'
  },
  sidebar: {
    display:'flex',
    width:'250px',
    minWidth:"190px",
    "@media (max-width: 768px)": {
      width:'auto',
      },
  },
  main: {
    height:'90vh',
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    "@media (max-width: 768px)": {
      flexDirection: "column"
      },
  }


})

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <div>
      <Header />
    <div className={classes.main}>
      {/* navbar */}
      <div
      className={classes.sidebar}
      // variant="permanent"
      // anchor="left"
      
      >
      <Navbar />
        <div>
          </div>
        </div>
      {/* output children of layout in App.js */}
      <div className={classes.page}>
      {children}
    </div>
    </div>
    </div>
  );
}