// File: src/components/Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './Login.css'; // Import your CSS file for Login

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

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
        // Check if the login was successful (customize this logic)
        if (response.data.status == true) {
          // setIsLoggedIn(true);
          localStorage.setItem('userId', response.data.userId);
          localStorage.setItem('userEmail', email);
          history.push('/children');
           // Set isLoggedIn to true for a successful login
        } else {
          // Handle failed login (e.g., show an error message)
          console.log('Login failed:', response.data.message);
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Login failed:', error);
      });
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login Page</h2>
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
