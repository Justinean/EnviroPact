import React, { useState } from 'react';
import { Container, Button, TextField, Typography} from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material'

// TODO: add handleFormSubmit and handleInputChange, will need utils for this to check if working

const SignupForm = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [userPassword, setUserPassword] = useState(''); 

    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [errorMessageUsername, setErrorMessageUsername] = useState('');
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errorMessagePassword, setErrorMessagePassword] = useState('');

    const handleUsernameBlur = () => {
        setUsernameError(false)
        setErrorMessageUsername('')
        if (username === '' ){
            setUsernameError(true);
            setErrorMessageUsername('Username is required');
        }
    }

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
        if (userPassword === '' ){
            setPasswordError(true);
            setErrorMessagePassword('Password is required');
        }
    }






    return (
        <Container>
            <h2> Signup </h2> 
            <form noValidate autoComplete="off">
                <TextField
                    onChange = {(e) => setUsername(e.target.value)}
                    label="username"
                    value= {username}
                    varient="outlined"
                    fullWidth
                    required
                    error={usernameError}
                    onBlur={handleUsernameBlur}
                    helperText= {errorMessageUsername}
                />
                <TextField
                    onChange = {(e) => setEmail(e.target.value)}
                    label="email"
                    value = {email}
                    varient="outlined"
                    fullWidth
                    required
                    error={emailError}
                    onBlur={handleEmailBlur}
                    helperText= {errorMessageEmail}
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
                {/* <TextField 
                    onChange = {(e) => setUserPassword(e.target.value)}
                    label='password'
                    value= {userPassword}
                    varient='outlined'
                    fullWidth
                    required
                    error= {passwordError}
                    onblur={handlePasswordBlur}
                    type='password'
                    helperText = {errorMessagePassword}
                />  */}

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

export default SignupForm;