import React, { useState } from 'react';
import CourseInput from './sections/CourseInput';
import ScheduleViewer from './sections/ScheduleViewer';

function App() {
  const [schedules, setSchedules] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (courses) => {
    try {
      // Prepare the data to send to the backend
      const data = { courses };
      // Send POST request to the backend
      // console.log(JSON.stringify(data))
      const response = await fetch('https://a38c-99-246-95-57.ngrok-free.app/courses', {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // Assuming the backend returns the schedules in the format you provided
      const parsedSchedules = result.map(JSON.parse);
      setSchedules(parsedSchedules);
      setError(null);
    } catch (e) {
      console.error("There was a problem with the fetch operation: " + e.message);
      setError("Failed to generate schedules. Please try again.");
      setSchedules(null);
    }
  };

  return (
    <div>
      <h1>Schedule Generator</h1>
      <CourseInput onSubmit={handleSubmit} />
      {error && <p style={{color: 'red'}}>{error}</p>}
      {schedules && <ScheduleViewer schedules={schedules} />}
    </div>
  );
}

export default App;