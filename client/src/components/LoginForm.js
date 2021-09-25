import React, { useState} from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material'

/*
        TODO: 
            Handle input change
            Handle Form Submit

*/


const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [userPassword, setUserPassword] = useState(''); 

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errorMessagePassword, setErrorMessagePassword] = useState('');

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
        if ( userPassword === '' ){
            setPasswordError(true);
            setErrorMessagePassword('Password is required');
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
                    onChange = {(e) => setUserPassword(e.target.value)}
                    label="password"
                    value = {userPassword}
                    varient="outlined"
                    fullWidth
                    required
                    error={passwordError}
                    onBlur={handlePasswordBlur}
                    helperText= {errorMessagePassword}
                    type='password'
                />  

                <Button
                onClick=''
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