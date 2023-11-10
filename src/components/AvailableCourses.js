// File: AvailableCourses.js
import React from 'react';
import CourseList from './CourseList';

const availableCourses = [
  { title: 'Course A', description: 'Description for Course A' },
  { title: 'Course B', description: 'Description for Course B' },
  // Add more available courses here
];

function AvailableCourses() {
  return <CourseList title="Available Courses" courses={availableCourses} />;
}

export default AvailableCourses;
