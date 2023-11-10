// File: CourseList.js
import React from 'react';
import './CourseList.css';

function CourseList({ title, courses }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-box">
            <div className="course-title">{course.title}</div>
            <div className="course-description">{course.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
