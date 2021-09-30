import React from 'react';
import {
  // Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

const FollowedCompanies = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};

  const _renderCompanies = (item, index) => {
    return (
      // inside here will go the list items
      <ListItem secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }>
        <ListItemText primary={item.companyName}>
        </ListItemText>
        <ListItem>
          <Button style={{ color: 'black' }}> View Data </Button>
        </ListItem>
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

/*
  Function for removing a company:
  import {useMutation} from '@apollo/client';
  import {UNFOLLOW_COMPANY} from '../utils/mutations';

  const [unfollowCompany, {error}] = useMutation(UNFOLLOW_COMPANY);

  const onUnfollow = async e => {
    if (!Auth.loggedIn()) {
        return;
      }
    const companyId = JSON.parse(e.target.getAttribute('data'));
    await unfollowCompany({variables: {companyId}});
    removeCompanyId(companyId)
  }
*/

export default FollowedCompanies;