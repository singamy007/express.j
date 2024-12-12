import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); // Load environment variables from the .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Custom middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
