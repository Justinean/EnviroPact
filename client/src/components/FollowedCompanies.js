import React from 'react';
import {
  Accordion,
  AccordionSummary,
  IconButton,
  AccordionDetails,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GET_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { UNFOLLOW_COMPANY } from '../utils/mutations';
import { removeCompanyId } from '../utils/localStorage';
import { APIClickable } from './APIClickable';
import Auth from '../utils/auth';

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
  };

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
    <Accordion style={{ marginTop: "30px" }}>
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
  );
};

export default FollowedCompanies;