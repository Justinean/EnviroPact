import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
// import PersonIcon from '@mui/icons-material/Person';
// import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
// import { blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import darkTheme from '../assets/themes/DarkTheme';
import { ThemeProvider } from '@mui/material'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import Auth from '../utils/auth';

const forms = [<LoginForm />, <SignupForm />];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  /* const handleListItemClick = (value) => {
    onClose(value);
  }; */
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog color='secondary' onClose={handleClose} open={open}>
        <div className={classes.window}>
          <DialogTitle>Log In / Sign Up</DialogTitle>
          <LoginForm />
          <SignupForm />
        </div>
      </Dialog>
    </ThemeProvider>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


const useStyles = makeStyles((darkTheme) => {
  return {
    button: {
      "@media (max-width: 768px)": {
        display: 'flex',
        transform: 'translateX(-6px)'
      },
    },
    buttonText: {
      textTransform: "capitalize",
      // background:'red',
      border: '1px solid #CED0CE',
      padding: '6px',
      borderRadius: '5px',
    },
    window: {
      background: "#111D13",
    }
  }
})

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(forms[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const classes = useStyles()

  return (
    <div>
      {Auth.loggedIn() ?
        <Button variant="" color="icon" onClick={() => Auth.logout()}>
          <div className={classes.button}>
            <Typography className={classes.buttonText}>
              Log Out
            </Typography>
          </div>
        </Button>
        :
        <div>
          <Button variant="" color="icon" onClick={handleClickOpen}>
            <div className={classes.button}>
              <Typography className={classes.buttonText}>
                Log In / Sign Up
              </Typography>
            </div>
          </Button>
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </div>
      }

    </div>


  );
}
