// this program is to serve static file into public making it accessible to server directly in the browsre


import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); // Load environment variables from the .env file

const app = express();
const PORT = process.env.PORT || 3000;
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname= path.dirname(fileURLToPath(import.meta.url));// we can also import the method dirname directly from path 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Static File Server</h1><p>Check the public directory for static files.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
