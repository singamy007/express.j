import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); // Load environment variables from the .env file

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON

app.post('/api/data', (req, res) => {
    const data = req.body;//the /api/data this data goes in variable const data = body
    res.send(`Received data: ${JSON.stringify(data)}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
