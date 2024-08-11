import React, { useState } from 'react';

function ScheduleViewer({ schedules }) {
  const [currentScheduleIndex, setCurrentScheduleIndex] = useState(0);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM to 7 PM

  // Parse the schedules if they're not already parsed
  const parsedSchedules = schedules.map(schedule => {
    if (typeof schedule === 'string') {
      try {
        return JSON.parse(schedule);
      } catch (error) {
        console.error("Error parsing schedule:", error);
        return null;
      }
    }
    return schedule;
  });

  const currentSchedule = parsedSchedules[currentScheduleIndex];

  const handlePrevSchedule = () => {
    setCurrentScheduleIndex((prev) => (prev > 0 ? prev - 1 : parsedSchedules.length - 1));
  };

  const handleNextSchedule = () => {
    setCurrentScheduleIndex((prev) => (prev < parsedSchedules.length - 1 ? prev + 1 : 0));
  };

  // Helper function to safely check if a section is scheduled for a given day and hour
  const isSectionScheduled = (section, dayIndex, hour) => {
    return section &&
           section._days &&
           Array.isArray(section._days) &&
           section._days.includes(dayIndex + 1) &&
           section._timeslot &&
           section._timeslot._startTime &&
           section._timeslot._startTime._hours === hour;
  };

  if (!currentSchedule) {
    return <div>Error loading schedule. Please try again.</div>;
  }

  return (
    <div>
      <h2>Schedule {currentScheduleIndex + 1} of {parsedSchedules.length}</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td>{`${hour}:00`}</td>
              {days.map((day, dayIndex) => (
                <td key={`${day}-${hour}`}>
                  {currentSchedule._sectionPossibilitiesList &&
                   currentSchedule._sectionPossibilitiesList.map((possibility, possibilityIndex) => 
                    possibility && possibility._sections &&
                    possibility._sections.map((section, sectionIndex) => {
                      if (isSectionScheduled(section, dayIndex, hour)) {
                        return (
                          <div key={`${possibilityIndex}-${sectionIndex}`}>
                            {section._courseName}
                            <br />
                            {`${section._timeslot._startTime._hours}:${section._timeslot._startTime._minutes} - 
                              ${section._timeslot._endTime._hours}:${section._timeslot._endTime._minutes}`}
                          </div>
                        );
                      }
                      return null;
                    })
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handlePrevSchedule}>Previous Schedule</button>
      <button onClick={handleNextSchedule}>Next Schedule</button>
    </div>
  );
}

export default ScheduleViewer;