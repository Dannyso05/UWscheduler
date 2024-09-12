import { getCourses } from '../schedule-calculator/src/get-course/get_courses'
import express from 'express'
import calculateSchedules from './src/ScheduleCalculator'
import IsOpenConstraint from './src/constraints/IsOpenConstraint'

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(
    cors({
        origin: 'http://localhost:3001',
        credentials: true,
    })
)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/courses', async (req, res) => {
    try {
        const { courses } = req.body

        const packet = courses.map(
            (course: { name: string; term: number }) => ({
                courseName: course['name'],
                term: '1249',
            })
        )
        const packages = await getCourses(packet)
        const sched = calculateSchedules([], packages, [new IsOpenConstraint()])

        console.log(JSON.stringify(sched))
        res.json(sched)
    } catch (error) {
        // Handle any errors that occur during the function execution
        res.status(500).json({
            error: 'An error occurred while fetching courses',
            details: error.message,
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
