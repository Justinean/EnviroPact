import React from 'react';
import { Container, List, Button } from '@mui/material'


import Box from '@mui/material/Box';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';


// function generate(element) {
//     return [0, 1, 2].map((value) =>
//       React.cloneElement(element, {
//         key: value,
//       }),
//     );
//   }

const FollowedCompanies = (props) => {

    const { companySearchData } = props;
    console.log('stockData', companySearchData)

    // data will be user Data for saved Companies
    const _renderCompanies = (item, index) => {
        console.log('ITEM', item);
        return (
            // inside here will go the list items
            <ListItem secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            }>
            <ListItemText primary={item.name}>
            </ListItemText>
            <ListItem>
                <Button style={{color: 'black'}}> View Data </Button>
            </ListItem>
            </ListItem>
        )
    };

    return (
        <Container style={{backgroundColor: '#1E91D6', color: 'white'}}>
            <h2>Followed Companies</h2>
            <List>
                { companySearchData.map(_renderCompanies) }
            </List>

        </Container>
    )
}

export default FollowedCompanies

