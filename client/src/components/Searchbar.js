import {
  createStyles,
  // fade,
  Theme,
  makeStyles,
} from '@mui/styles'
import { companySearchData } from './stockData';
import { Autocomplete, InputAdornment } from '@mui/material';
import { TextField } from '@mui/material';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     search: {
//       position: 'relative',
// borderRadius: theme.shape.borderRadius,
// backgroundColor: fade(theme.palette.common.white, 0.15),
// '&:hover': {
//   backgroundColor: fade(theme.palette.common.white, 0.25),
// },
//       marginLeft: 0,
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     inputRoot: {
//       color: 'inherit',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   })
// );

export default function Searchbar({ passToParent }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchInput, setSearch] = useState('');

  const handleInput = (event, value) => {
    event.preventDefault();
    setSearch(value);
    console.log(value);
  };

  const handleSearch = () => {
    const { Symbol } = searchInput;
    setSearchValue(Symbol);
    console.log("Search Value: ", searchValue);
    passToParent(searchValue)
  };

  return (
    <div style={{ display: "flex", width: '100%', justifyContent: 'center' }}>
      <h1>You are searching: {searchValue}</h1>
      <div style={{ width: '75%' }}>
        <Autocomplete
          id="autoSearch"
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
      <IconButton style={{ cursor: "pointer", padding: "17px" }} onClick={handleSearch}><SearchIcon /></IconButton>
    </div>
  );
}