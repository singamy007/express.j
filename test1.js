import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); // Load environment variables from the .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Route to display the form
app.get('/form', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <input type="text" name="name" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>
    `);
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const name = req.body.name; // Access the "name" field from the form
    res.send(`<h1>Hello, ${name}!</h1>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
