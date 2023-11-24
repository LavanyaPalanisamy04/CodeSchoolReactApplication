// File: CourseList.js
import React from 'react';
import './CourseList.css'; // Make sure your CSS file is updated accordingly
import { useHistory } from 'react-router-dom';

function CourseList({ title, courses }) {
  const history = useHistory();

  // Function to handle course selection
  const handleCourseClick = (courseId) => {
    // Navigate to the course page and pass the selected course details in the state
    history.push(`/course/${courseId}/enroll`, { course });
  };

  return (
    <div className="course-list-container">
      <h2 className="course-list-title">{title}</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card" onClick={() => handleCourseClick(course.id)}>
            <div className="course-image-container">
              {/* Using a placeholder image */}
              <img src="../images/courseimg.jpg" alt={course.title} className="course-image" />
            </div>
            <div className="course-info">
              <div className="course-header">
                <span className="course-provider">{course.provider}</span>
                <span className="course-rating">{course.rating}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <div className="course-description">{course.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
