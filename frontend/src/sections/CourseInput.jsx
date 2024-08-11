import React, { useState } from 'react';

function CourseInput({ onSubmit }) {
  const [courses, setCourses] = useState([{ name: ''}]);

  const handleAddCourse = () => {
    setCourses([...courses, { name: ''}]);
  };

  const handleChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(courses);
  };

  return (
    <form onSubmit={handleSubmit}>
      {courses.map((course, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Course Name"
            value={course.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="Course Code"
            value={course.code}
            onChange={(e) => handleChange(index, 'code', e.target.value)}
          /> */}
        </div>
      ))}
      <button type="button" onClick={handleAddCourse}>Add Course</button>
      <button type="submit">Generate Schedules</button>
    </form>
  );
}

export default CourseInput;