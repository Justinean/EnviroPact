import React, { useState } from 'react';
import { Container, Button, TextField } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { makeStyles } from '@mui/styles';

// TODO: add handleFormSubmit and handleInputChange, will need utils for this to check if working

const SignupForm = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [errorMessageUsername, setErrorMessageUsername] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');

  const [createUser, /* { error } */] = useMutation(CREATE_USER);

  const handleUsernameBlur = () => {
    setUsernameError(false)
    setErrorMessageUsername('')
    if (username === '') {
      setUsernameError(true);
      setErrorMessageUsername('Username is required');
    }
  }

  const handleEmailBlur = () => {
    setEmailError(false)
    setErrorMessageEmail('')
    if (email === '') {
      setEmailError(true);
      setErrorMessageEmail('Email is required');
    }
  }

  const handlePasswordBlur = () => {
    setPasswordError(false)
    setErrorMessagePassword('')
    if (password === '') {
      setPasswordError(true);
      setErrorMessagePassword('Password is required');
    }
  }

  const handleFormSubmit = async e => {
    e.preventDefault()
    const userFormData = { username, email, password }
    try {
      const { data } = await createUser({ variables: userFormData });
      const { token, user } = data.createUser;

      if (!token || !user) {
        throw new Error('Something went wrong!');
      }

      Auth.login(token)
    } catch (err) {
      if (err.message.includes("valid email")) {
        setEmailError(true);
        setErrorMessageEmail('Please insert a valid email!');
      } else if (err.message.includes("email_1 dup key")){
        setEmailError(true);
        setErrorMessageEmail('Email already exists!');
      } else if (err.message.includes("username_1 dup key")){
        setUsernameError(true);
        setErrorMessageUsername('Username already exists!');
      }
      console.error(err)
    }
  }

  const useStyles = makeStyles({
    input: {
      marginBottom: '20px',
      minWidth: '400px'

    },
    button: {
      paddingBottom: '20px',
    }
  })
  const classes = useStyles()

  return (
    <Container>
      <h2> Sign Up </h2>
      <form noValidate autoComplete="off">
        <div className={classes.input}>
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            label="username"
            value={username}
            varient="outlined"
            fullWidth
            required
            error={usernameError}
            onBlur={handleUsernameBlur}
            helperText={errorMessageUsername}
          />
        </div>
        <div className={classes.input}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="email"
            value={email}
            varient="outlined"
            fullWidth
            required
            error={emailError}
            onBlur={handleEmailBlur}
            helperText={errorMessageEmail}
          />
        </div>
        <div className={classes.input}>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="password"
            value={password}
            varient="outlined"
            fullWidth
            required
            error={passwordError}
            onBlur={handlePasswordBlur}
            helperText={errorMessagePassword}
            type='password'
          />
        </div>
        <div className={classes.button}>
          <Button
            onClick={handleFormSubmit}
            type='submit'
            variant='contained'
            endIcon={< KeyboardArrowRight />}
          >
            Submit
          </Button>
        </div>
      </form>
    </Container>
  )
}

export default SignupForm;