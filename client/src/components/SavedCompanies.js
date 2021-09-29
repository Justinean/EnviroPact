import React from 'react';
import { Container, List, Button } from '@mui/material'






import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';


function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const SavedCompanies = ({data}) => {

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    // data will be user Data for saved Companies
    const _renderCompanies = ({ data }) => {
        return (
            // inside here will go the list items
            console.log(data)
        )
    };

    return (
        <Container style={{backgroundColor: '#1E91D6', color: 'white'}}>
            <h2>Followed Companies</h2>
            <List>
                <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                }>
                <ListItemText primary={data.companyName}>
                </ListItemText>
                <ListItem>
                    <Button style={{color: 'black'}}> View Data </Button>
                </ListItem>
                </ListItem>
            </List>

        </Container>
    )
}

export default SavedCompanies

