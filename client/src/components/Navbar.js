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
import Dialog from './Dialog'


// imports for working on sidebar - delete unused 
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
    display:'grid',
    flexDirection:'column',
    background:"#415D43",
    color:"#CED0CE",
    height:"100%",
    width:'100vw',
  },
  list: {
    "@media (max-width: 768px)": {
      display:'grid',
      gridTemplateColumns:'1fr 1fr 1fr 2fr',
      flexDirection:'row',
      height:"75px",
      width:'100%',
      },
  },
  listItem:{
    "@media (max-width: 768px)": {
      display:'flex',
      flexDirection:'column',
      },
  },
  dialog: {
    transform:'translateY(-9px)',
    whiteSpace:'nowrap',
  },
  navIcon: {
    justifyContent:'center',
    alignItems:'center',
  },
  navText: {
    "@media (max-width: 768px)": {
      justifyContent:'center',
      },
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
      
      <div className={classes.sidebar}>
      <List className={classes.list}>
        {menuItems.map(item => (
          <ListItem className={classes.listItem}
          button
          key={item.text}
          onClick={()=> history.push(item.path)}
          >
            <ListItemIcon className={classes.navIcon}>{item.icon}</ListItemIcon>
            <ListItemText className={classes.navText} primary={item.text} />
            </ListItem>
        ))}
        <ListItem className={classes.dialog}>
          <Dialog />
         </ListItem>
        </List>
        </div>

        
    </ThemeProvider>
  );
};

export default Navbar;