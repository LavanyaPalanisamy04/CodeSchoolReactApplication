// File: src/components/Login.js

import { useHistory } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './Login.css'; // Import your CSS file for Login
import React, { useState, useEffect } from 'react';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    // Clear the error message whenever the user edits the email or password fields
    setErrorMessage('');
  }, [email, password]);

  const handleLogin = () => {
    // Define the data to send in the request as a JSON object
    const data = {
      email: email,
      password: password,
    };

    // Make a POST request to the login API
    axios
      .post('http://localhost:8080/api/users/login', data)
      .then((response) => {
        console.log(response);
        // Check if the login was successful (customize this logic)
        if (response.status == 200) {
          // setIsLoggedIn(true);
          localStorage.setItem('userId', response.data.userId);
          localStorage.setItem('userEmail', email);
          history.push('/children');
           // Set isLoggedIn to true for a successful login
        } else {
          // Handle failed login (e.g., show an error message)
          console.log("inside try");
          console.log('Login failed:', response.data);
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.log(error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Login failed:', error.response.data);
          // Set the error message state to the message from the backend
          setErrorMessage(error.response.data || 'Invalid credentials.');
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
          setErrorMessage('The server did not respond. Please try again later.');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error', error.message);
          setErrorMessage('An unexpected error occurred. Please try again.');
        }
      });
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login Page</h2>
        {errorMessage && <div className="error-box">{errorMessage}</div>}
        <div className="form-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
