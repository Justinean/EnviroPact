/* const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
borderRadius: theme.shape.borderRadius,
backgroundColor: fade(theme.palette.common.white, 0.15),
'&:hover': {
  backgroundColor: fade(theme.palette.common.white, 0.25),
},
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  })
); */

import {
  createStyles,
  Theme,
  makeStyles,
} from '@mui/styles'
import { companySearchData } from '../assets/stockData';
import { Autocomplete, InputAdornment } from '@mui/material';
import { TextField } from '@mui/material';
import { PropTypes } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
      transform: "translate(34px, 20px) scale(1);"
    }
  },
  inputRoot: {
    color: "#111D13",
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#415D43"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E18335"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#111D13"
    }
  }
}));

export default function Searchbar({ sbDataFunction }) {
  const classes = useStyles();
  // When a company is selected from the drop down we will send the selection data to the parent element.
  const handleInput = (event, value) => {
    if (value === null) {
      return;
    }
    const data = Object.values(value);
    sbDataFunction(data);
  };

  return (
    <div style={{ display: "flex", width: '100%', justifyContent: 'center', }}>
      <div style={{ width: '75%' }}>
        <Autocomplete
          id="autoSearch"
          classes={classes}
          onChange={handleInput}
          options={companySearchData}
          getOptionLabel={(option) => `Symbol: ${option.Symbol}      Company: ${option.name}      Industry: ${option.Industry}`}
          renderInput={(params) => (
            <TextField {...params}
              label="Search by Stock Symbol, Company Name, or Industry"
              variant="outlined"
            />
          )}
        />
      </div>
    </div>
  );
};