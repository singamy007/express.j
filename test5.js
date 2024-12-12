import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); // Load environment variables from the .env file

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/search', (req, res) => {
    const query = req.query.q; // Access the query parameter `q`
    res.send(`You searched for: ${query}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
