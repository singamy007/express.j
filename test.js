import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); // Load environment variables from the .env file

const app = express(); // Initialize Express app
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
