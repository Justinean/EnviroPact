import React, { useState } from 'react';
import { Container, Button, TextField } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { makeStyles } from '@mui/styles';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');

  const [login] = useMutation(LOGIN)

  const handleEmailBlur = () => {
    setEmailError(false)
    setErrorMessageEmail('')
    if (email === '') {
      setEmailError(true);
      setErrorMessageEmail('Email is required');
    }
  };

  const handlePasswordBlur = () => {
    setPasswordError(false)
    setErrorMessagePassword('')
    if (password === '') {
      setPasswordError(true);
      setErrorMessagePassword('Password is required');
    }
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    const userFormData = { email, password };
    try {
      const { data } = await login({ variables: userFormData });
      const { token, user } = data.login;

      if (!token || !user) {
        throw new Error('Something went wrong!');
      }

      Auth.login(token)
    } catch (err) {
      setPasswordError(true);
      setEmailError(true);
      setErrorMessagePassword('Incorrect email or password!');
    }
  };

  const useStyles = makeStyles({
    input: {
      marginBottom: '20px'
    },
    button: {
      paddingBottom: '20px',
    },
    heading:{
      marginBottom:'20px',
      marginTop:'30px',
  }
});
  const classes = useStyles();
  return (
    <Container>
      <h2 className={classes.heading}> Log In </h2>
      <form noValidate autoComplete="off" className={classes.form}>
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
  );
};

export default LoginForm;