import React from 'react';
import {
  // Box,
  // Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { GET_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { UNFOLLOW_COMPANY } from '../utils/mutations';
import { removeCompanyId } from '../utils/localStorage';
import Auth from '../utils/auth';

const FollowedCompanies = ({ passViewCompany }) => {
  const { /* loading, */ data } = useQuery(GET_ME);
  const userData = data?.me || {};
  const [unfollowCompany, /* {error} */] = useMutation(UNFOLLOW_COMPANY);

  const viewData = (e, value) => {
    const data = [e.currentTarget.value];
    console.log("viewData: ", data);
    passViewCompany(data);
  };

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
      // inside here will go the list items
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
        <IconButton
          edge="start"
          aria-label="search"
          onClick={viewData}
          value={item.stockSymbol}
          style={{ color: 'black' }}>
          <SearchIcon />
        </IconButton>
        <ListItemText
          primary={item.companyName}
          // secondary="View Data"
          >
        </ListItemText>
        {/* <Button onClick={viewData} data={item.stockSymbol} style={{ color: 'black' }}> View Data </Button> */}
      </ListItem>
    )
  };

  return (
    <Container style={{ backgroundColor: '#1E91D6', color: 'white' }}>
      <h2>Followed Companies</h2>
      <List>
        {userData.followedCompanies.map(_renderCompanies)}
      </List>
    </Container>
  )
}

export default FollowedCompanies;