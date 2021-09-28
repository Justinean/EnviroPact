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


const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    background:" ",
    border:"",
    borderRadius:"",
  },
  drawer: {
    width:drawerWidth,
  },
  drawerPaper: {
    width:drawerWidth,
    background: "#464"
  },
  root: {
    display:'flex'
  }


})

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    
    <div className={classes.root}>
      {/* navbar */}
      <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
      >
      <Navbar />
        <div>
          </div>
        </Drawer>
      {/* output children of layout in App.js */}
      <div className={classes.page}>
      <Header />
      {children}
    </div>
    </div>
  );
}