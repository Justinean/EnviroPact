import {
  // Theme,
  makeStyles,
} from '@mui/styles'
import { companySearchData } from '../assets/stockData';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
      transform: "translate(34px, 20px) scale(1);"
    }
  },
  bar: {
    backgroundColor: '#CED0CE',
    color: 'black',
    '&:hover': {
      backgroundColor: '#1E91D6',
      color: 'snow'
    }
  },
  inputRoot: {
    color: "#111D13",
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#415D43",
      '&:hover': {
        boarderColor: '#415D43'
      }
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
              className={classes.bar}
            />
          )}
        />
      </div>
    </div>
  );
};