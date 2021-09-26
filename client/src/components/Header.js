import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@mui/material';
import Auth from '../utils/auth'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

export default function Header(props) {
    const [[displaySignUp, setDisplaySignUp], [displayLogin, setDisplayLogin]] = [useState(false), useState(false)]

    const showLogin = () => {
        setDisplaySignUp(false)
        setDisplayLogin(!displayLogin)
    }

    const showSignUp = () => {
        setDisplayLogin(false)
        setDisplaySignUp(!displaySignUp)
    }

    const logout = () => {
        Auth.logout();
    }

    return(
        <Container>
            {Auth.loggedIn() ? 
            <button onClick={logout}>Logout</button>
            :
            (
            <div>
                <button onClick={showLogin}>Login</button><button onClick={showSignUp}>Sign Up</button>
            </div>
            )
            }
            {displaySignUp ? <SignupForm></SignupForm> : null}
            {displayLogin ? <LoginForm></LoginForm> : null}
        </Container>
    )
}