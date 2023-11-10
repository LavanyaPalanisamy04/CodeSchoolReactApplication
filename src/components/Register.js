// File: src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register({ setIsRegistered }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = () => {
    const userData = {
      userName,
      password,
      email,
      phone,
      firstName,
      lastName,
      role,
    };

    axios
      .post('http://localhost:8080/api/users/register', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.data.success) {
          setIsRegistered(true);
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
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
