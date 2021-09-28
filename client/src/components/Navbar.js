import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  ThemeProvider,
  Container,
  Card,
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { makeStyles } from '@mui/styles';


// imports for working on sidebar - delete unused 
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import darkTheme from '../assets/themes/DarkTheme';
import HomeIcon from '@mui/icons-material/Home';
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const useStyles = makeStyles((darkTheme) => {
  return {
  sidebar: {
    background:"#415D43",
    color:"#CED0CE"
  }
}
})


const Navbar = () => {
  const classes = useStyles()
  const menuItems = [
    {
      text:'Home',
      icon:<HomeIcon color="icon"/>,
      path:'/'
    },
    {
      text:'Dashboard',
      icon:<SpeedIcon color="icon"/>,
      path:'/dashboard'
    },
    {
      text:'Contributors',
      icon:<PeopleAltIcon color="icon"/>,
      path:'/contributors'
    }
  ]
  const history = useHistory()

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
      <div className={classes.sidebar}>
      <List>
        {menuItems.map(item => (
          <ListItem
          button
          key={item.text}
          onClick={()=> history.push(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            </ListItem>
        ))}
        </List>
        </div>
        </div>
    </ThemeProvider>
  );
};

export default Navbar;