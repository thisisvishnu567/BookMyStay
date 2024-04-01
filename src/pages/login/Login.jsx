<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios library
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    // Simple password validation
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Make a GET request to the JSON server endpoint
    try {
      const response = await axios.get(`http://localhost:8080/users?email=${email}&password=${password}`);

      // Check if the user with the provided credentials exists
      if (response.data.length > 0) {
        setShowSuccessMessage(true);

        // Hide the success message after 3 seconds (3000 milliseconds)
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);

        // Redirect to the home page
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      alert('An error occurred while fetching user details');
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-form'>
          <h1>Login</h1>
          {showSuccessMessage && (
            <div className='success-message'>Successfully Logged in</div>
          )}
          <form onSubmit={handleLogin}>
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='error-message'>{emailError}</div>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Login</button>
          </form>
          <div className='register-link'>
            <p>
              Don't have an account?{' '}
              <Link to='/register'>Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
=======
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getUsers } from '../../service';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        BookMyStay
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    try {
      const users = await getUsers();
      const matchingUser = users.find(user => user.email === email && user.password === password);
      if (matchingUser) {
        console.log('User logged in:', matchingUser);
        navigate('/');
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
>>>>>>> 107386e2c56d5dde13920e4917298ac6fabd25ad
