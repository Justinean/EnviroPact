import React, { useState} from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import {useMutation} from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

/*
        TODO: 
            Handle input change
            Handle Form Submit

*/


const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errorMessagePassword, setErrorMessagePassword] = useState('');

    const [login, {error}] = useMutation(LOGIN)

    const handleEmailBlur = () => {
        setEmailError(false)
        setErrorMessageEmail('')
        if (email === '' ){
            setEmailError(true);
            setErrorMessageEmail('Email is required');
        }
    }

    const handlePasswordBlur = () => {
        setPasswordError(false)
        setErrorMessagePassword('')
        if ( password === '' ){
            setPasswordError(true);
            setErrorMessagePassword('Password is required');
        }
    }

    const handleFormSubmit = async e => {
        e.preventDefault();
        const userFormData = {email, password}
        try {
            const {data} = await login({variables: userFormData});
            const {token, user} = data.login;

            if (!token || !user) {
                throw new Error('Something went wrong!');
            }

            Auth.login(token)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Container>
            <h2> Login </h2> 
            <form noValidate autoComplete="off">
                <TextField
                    onChange = {(e) => setEmail(e.target.value)}
                    label="email"
                    value= {email}
                    varient="outlined"
                    fullWidth
                    required
                    error={emailError}
                    onBlur={handleEmailBlur}
                    helperText={errorMessageEmail}
                />
                            
                <TextField
                    onChange = {(e) => setPassword(e.target.value)}
                    label="password"
                    value = {password}
                    varient="outlined"
                    fullWidth
                    required
                    error={passwordError}
                    onBlur={handlePasswordBlur}
                    helperText= {errorMessagePassword}
                    type='password'
                />  

                <Button
                onClick={handleFormSubmit}
                type='submit'
                variant='contained'
                endIcon={< KeyboardArrowRight />}
                >
                    Submit
                </Button>

            </form>
        </Container>
    )   
}

export default LoginForm;