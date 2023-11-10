// File: DashboardPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css'; // Import your CSS file
import CourseList from './CourseList'; // Import your CourseList component

function DashboardPage() {
  const [enrolledCourses, setEnrolledCourses] = useState([
    { id: 1, title: 'Machine Learning Basics' },
    { id: 2, title: 'Web Development Fundamentals' },
    { id: 3, title: 'Data Visualization with D3' },
    { id: 4, title: 'ReactJS Masterclass' },
    { id: 5, title: 'Advanced JavaScript Concepts' },
  ]);

  const [availableCourses, setAvailableCourses] = useState([
    { id: 6, title: 'Python for Data Science' },
    { id: 7, title: 'Full Stack Web Development' },
    { id: 8, title: 'Mobile App Development with React Native' },
    { id: 9, title: 'Artificial Intelligence: A Comprehensive Guide' },
    { id: 10, title: 'Cybersecurity Fundamentals' },
  ]);

  // Limit the number of displayed courses to a maximum of 5
  const limitedEnrolledCourses = enrolledCourses.slice(0, 5);
  const limitedAvailableCourses = availableCourses.slice(0, 5);

  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <div>
      <nav className="top-navbar">
        <Link to="/dashboard" className="navbar-logo">
          CodeSchool
        </Link>
        <div className="navbar-links">
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </nav>
      <div className="dashboard-container">
        <CourseList title="Enrolled Courses" courses={limitedEnrolledCourses} />
        <CourseList title="Available Courses" courses={limitedAvailableCourses} />
      </div>
    </div>
  );
}

export default DashboardPage;
