import React, { useState} from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material'
const LoginForm = (props) => {
    return (
        <Container>
            <h2> Login </h2> 
            <form noValidate autoComplete="off">
                <TextField
                    label="username"
                    value=''
                    varient="outlined"
                    fullWidth
                    required
                    error=''
                    onBlur=''
                    helperText=''
                />
                <TextField 
                    label='password'
                    value=''
                    varient='outlined'
                    fullWidth
                    required
                    error=''
                    onblur=''
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