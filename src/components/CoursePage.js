// File: src/components/CoursePage.js
import React, { useState } from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import './CoursePage.css';
import ageGroupImage from '../images/img1.jpeg';
import yourVideo from '../videos/v1.mp4'; // Add the path to your video file


function EnrollPage() {
  return (
    <div className="course-container">
      <nav className="top-navbar">
        <div className="navbar-logo">CodeSchool</div>
        <div className="navbar-links">
          <Link to="/signout" className="navbar-link">
            Manav Vagdoda
          </Link>
        </div>
      </nav>
      <main className="course-content">
        <div className="course-title">
          <h2>Decision Intelligence</h2>
        </div>
        <div className="course-video-container">
          <video controls className="course-video">
          <source src={yourVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="course-description">
          <h2>Course Description</h2>
          <p>In a world driven at every level by data, what does it mean to be in—or aspire to—a position of leadership? What are the core principles you need to learn and understand at the deepest level? In this course, Google's Chief Decision Scientist Cassie Kozyrkov—one of the most high-profile data-culture evangelists in the world—lays out 18 clear and concise lessons that every business and organizational leader needs to make their team and their org thrive in a data-driven world. Learn principles for the leader's role in data, decision making in and with data, and the role of delegation and trust in data-driven decision making. Cassie also explains the four aspects of AI and machine learning and how this can affect your business. Plus, discover how to build a healthy data culture and learn some best practices—the importance of doing data work in the right order, the value of testing, harnessing the power of large data sets, and more.</p>
        </div>
        <div className="instructor-details-horizontal">
          <p><strong>Instructor:</strong> Dr. Kalyani</p>
          <p><strong>Experience:</strong> 5 years</p>
          <p><strong>Available Days:</strong> Monday, Wednesday, Friday, Saturday, Sunday</p>
        </div>
        <button className="enroll-button" onClick={() => alert('Enrolled!')}>
          Enroll Now
        </button>
      </main>
    </div>
  );
}

function ChooseDayPage() {
  const [selectedDay, setSelectedDay] = useState('');

  const handleDaySubmit = (e) => {
    e.preventDefault();
    // Perform day selection logic
    alert(`Day selected: ${selectedDay}`);
  };

  return (
    <div className="course-container">
      <nav className="top-navbar">
        <div className="navbar-logo">CodeSchool</div>
        <div className="navbar-links">
          <Link to="/signout" className="navbar-link">
            Manav Vagdoda
          </Link>
        </div>
      </nav>
      <main className="course-content">
        <div className="course-title">
          <h2>Decision Intelligence</h2>
        </div>
        <div className="course-video-container">
          <video controls className="course-video">
            {/* Add your video source */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="course-description">
          <h2>Course Description</h2>
          <p>In a world driven at every level by data, what does it mean to be in—or aspire to—a position of leadership? What are the core principles you need to learn and understand at the deepest level? In this course, Google's Chief Decision Scientist Cassie Kozyrkov—one of the most high-profile data-culture evangelists in the world—lays out 18 clear and concise lessons that every business and organizational leader needs to make their team and their org thrive in a data-driven world. Learn principles for the leader's role in data, decision making in and with data, and the role of delegation and trust in data-driven decision making. Cassie also explains the four aspects of AI and machine learning and how this can affect your business. Plus, discover how to build a healthy data culture and learn some best practices—the importance of doing data work in the right order, the value of testing, harnessing the power of large data sets, and more.</p>
        </div>
        <div className="instructor-details-horizontal">
          <p><strong>Instructor:</strong> Dr. Kalyani</p>
          <p><strong>Experience:</strong> 5 years</p>
          <p><strong>Available Days:</strong> Monday, Wednesday, Friday, Saturday, Sunday</p>
        </div>    
        <div className="day-form">
          <h2>Choose Day</h2>
          <form onSubmit={handleDaySubmit}>
            <label>
              Select a Day:
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}

function CoursePage() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/enroll`} component={EnrollPage} />
      <Route path={`${path}/choose-day`} component={ChooseDayPage} />
    </Switch>
  );
}

export default CoursePage;
