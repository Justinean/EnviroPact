import React from 'react';
import {
  // Box,
  // Button,
  Accordion,
  AccordionSummary,
  Container,
  IconButton,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GET_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { UNFOLLOW_COMPANY } from '../utils/mutations';
import { removeCompanyId } from '../utils/localStorage';
import Auth from '../utils/auth';
import { APIClickable } from './APIClickable';

// const FollowedCompanies = (props) => {
//   const { data, loading } = useQuery(GET_ME);
//   const userData = data?.me || {};
//   const [unfollowCompany] = useMutation(UNFOLLOW_COMPANY);
  

//   /* const viewData = (e, value) => {
//     const data = [e.currentTarget.value];
//     console.log("viewData: ", data);
//     passViewCompany(data);
//   }; */

//   const onUnfollow = async companyId => {
//     if (!Auth.loggedIn()) {
//       return;
//     }
//     await unfollowCompany({ variables: { companyId } });
//     removeCompanyId(companyId);
//   }

//   const _renderCompanies = (item, index) => {
//     const setIndexandSend = () => {
//       onUnfollow(JSON.parse(localStorage.getItem('followedCompanies'))[index])
//     }
//     return (
//       // inside here will go the list items
//       <ListItem
//         secondaryAction={
//           <IconButton
//             edge="end"
//             aria-label="delete"
//             onClick={setIndexandSend}>
//             <DeleteIcon />
//           </IconButton>
//         }
//         key={item.companyId}>
//           <APIClickable query={item.stockSymbol}
//           ><SearchIcon /></APIClickable>
//         {/* <IconButton
//           edge="start"
//           aria-label="search"
//           // onClick={viewData}
//           value={item.stockSymbol}
//           style={{ color: 'black' }}>
          
//         </IconButton> */}
//         <ListItemText
//           primary={item.companyName}
//           // secondary="View Data"
//           >
//         </ListItemText>
//         {/* <Button onClick={viewData} data={item.stockSymbol} style={{ color: 'black' }}> View Data </Button> */}
//       </ListItem>
//     )
//   };

//   return (
//     <Container style={{ backgroundColor: '#1E91D6', color: 'white' }}>
//       <h2>Followed Companies</h2>
//       <List>
//         {loading ? <span></span> : userData.followedCompanies.map(_renderCompanies)}
//       </List>
//     </Container>
//   )
// }


const FollowedCompanies = (props) => {
  const { data, loading } = useQuery(GET_ME);
  const userData = data?.me || {};
  const [unfollowCompany] = useMutation(UNFOLLOW_COMPANY);
  
  const onUnfollow = async companyId => {
    if (!Auth.loggedIn()) {
      return;
    }
    await unfollowCompany({ variables: { companyId } });
    removeCompanyId(companyId);
  }

  const _renderCompanies = (item, index) => {
    const setIndexandSend = () => {
      onUnfollow(JSON.parse(localStorage.getItem('followedCompanies'))[index])
    }

    return (
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={setIndexandSend}>
            <DeleteIcon />
          </IconButton>
        }
        key={item.companyId}>
          <APIClickable query={item.stockSymbol}
          ><SearchIcon /></APIClickable>
        <ListItemText
          primary={item.companyName}
        >
        </ListItemText>
      </ListItem>
    )
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Followed Companies</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {loading ? <span></span> : userData.followedCompanies.map(_renderCompanies)}
      </AccordionDetails>
    </Accordion>
  )
}

export default FollowedCompanies;