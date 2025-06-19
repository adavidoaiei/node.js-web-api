const express = require('express');
const dotenv = require('dotenv');
const db = require('./database');
const userRoutes = require('./routes/users');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/users', userRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Node.js SQLite API' });
});

// Initialize database and start server
const PORT = process.env.PORT || 3000;
db.init().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to initialize database:', err);
    process.exit(1);
});
