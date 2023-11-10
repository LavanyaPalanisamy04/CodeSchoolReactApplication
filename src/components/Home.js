// File: src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Home.css'; // Import your CSS file
import ageGroupImage from '../images/img1.jpeg'; // Import an age group-related image

function Home() {
  return (
    <div className="home-container">
      <nav className="top-navbar">
        <div className="navbar-logo">CodeSchool</div>
        <div className="navbar-links">
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/register" className="navbar-link">Sign Up</Link>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to CodeSchool</h1>
        <p>Empower Your Journey: Learn Every Step of the Way</p>
        <img src={ageGroupImage} alt="Age Group" className="age-group-image" />
      </div>
    </div>
  );
}

export default Home;
