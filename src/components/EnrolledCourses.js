// File: EnrolledCourses.js
import React from 'react';
import CourseList from './CourseList';

const enrolledCourses = [
  { title: 'Course 1', description: 'Description for Course 1' },
  { title: 'Course 2', description: 'Description for Course 2' },
  // Add more enrolled courses here
];

function EnrolledCourses() {
  return <CourseList title="Enrolled Courses" courses={enrolledCourses} />;
}

export default EnrolledCourses;
