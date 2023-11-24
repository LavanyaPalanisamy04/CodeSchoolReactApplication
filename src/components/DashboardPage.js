// File: DashboardPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css'; // Import your CSS file
import CourseList from './CourseList'; // Import your CourseList component
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function DashboardPage() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  
  const [availableCourses, setAvailableCourses] = useState([]);

  // Limit the number of displayed courses to a maximum of 5
  const limitedEnrolledCourses = enrolledCourses.slice(0, 5);
  const limitedAvailableCourses = availableCourses.slice(0, 5);
  
  /**************** */
  const location = useLocation(); // get the location object
  const profile = location.state?.profile; // use optional chaining in case state is undefined
  console.log("from dashboard: ", profile);
  /************************ */


  useEffect(() => {
    // Fetch enrolled courses
    // Note: Adjust the endpoint and parameters based on your backend API
    axios.get(`http://localhost:8080/api/child/getEnrolledCourses/${profile.id}`)
      .then(response => {
        setEnrolledCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching enrolled courses:', error);
      });

    // Fetch available courses
    // Note: Adjust the endpoint and parameters based on your backend API
    axios.get(`http://localhost:8080/api/course/getCourses?ageGroup=${profile.ageGroup}`)
      .then(response => {
        const coursesWithColor = response.data.map(course => ({
          ...course,
          backgroundColor: getRandomColor(),
        }));
        setAvailableCourses(coursesWithColor);
      })
      .catch(error => {
        console.error('Error fetching available courses:', error);
      });
  }, []);

  const handleLogout = () => {
    // Implement your logout logic here
  };

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 80%)`;
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
