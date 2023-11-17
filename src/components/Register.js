// File: src/components/Register.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

function Register({ setIsRegistered }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [role, setRole] = useState('');
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      userName,
      password,
      email,
      phone,
      firstName,
      lastName,
      // role,
    };

    axios
      .post('http://localhost:8080/api/users/register', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response)
        if (response.status === 201) {
          // setIsRegistered(true);
          history.push('/login');
        } else {
          console.log('Registration failed:', response.data.message);
        }
      })
      .catch((error) => {
        console.error('Registration failed:', error);
      });
  };

  return (
    <div className="register-page">
      <div className="registration-container">
        <h2>Let's get started...</h2>
        <form className="registration-form">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
