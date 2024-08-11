import { getCourses } from "../schedule-calculator/src/get-course/get_courses";
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/courses', async (req: Request, res: Response) => {
  try {
    // Call the getCourses function with the necessary parameters
    const courses = await getCourses(
      [
        { courseName: 'CS 136L', term: 1249 },
        { courseName: 'CS 135', term: 1249 },
        { courseName: 'MATH 135', term: 1249 },
        { courseName: 'MATH 136', term: 1249 },
        // Uncomment or modify as needed
        //{ courseName: 'MATHwef 136', term: 1249 },
      ],
      false
    );
    // Send the result as a JSON response
    res.json(courses);
  } catch (error) {
    // Handle any errors that occur during the function execution
    res.status(500).json({ error: 'An error occurred while fetching courses', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
