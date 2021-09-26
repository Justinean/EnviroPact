import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@mui/material';
import Auth from '../utils/auth'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

export default function Header(props) {
    return(
        <Container>
            {
                <h1>Hello from the header!</h1>
            }
        </Container>
    )
}