// src/index.ts
import express from 'express';
import { greet } from './funciton';

const app = express();
const port = 3000;

app.get('/greet', (req, res) => {
    const name = req.query.name as string || 'Ale';
    const greeting = greet(name);
    res.send(greeting);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
