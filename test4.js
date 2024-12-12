import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); // Load environment variables from the .env file

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`Hello, ${userName}!`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
