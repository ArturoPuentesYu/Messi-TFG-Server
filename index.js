const express = require('express');
const corsMiddleware = require('./corsConfig.js');
require('dotenv').config(); // Ensure dotenv is configured at the top
const connectDB = require('./config/database.js');

const app = express();

// Connect to Database
connectDB();

// Usar CORS para todas las solicitudes
app.use(corsMiddleware);

// Require routes
const userRoutes = require('./routes/user.route.js'); // Ensure the path is correct
const dataRoutes = require('./routes/data.route.js'); // Ensure the path is correct
// Middleware for parsing application/json
app.use(express.json());

// Use routes with a base path for all user-related endpoints
app.use('/api/users', corsMiddleware, userRoutes);
app.use('/api/data', corsMiddleware, dataRoutes);

// Basic route for home to test that the server is running
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Project!');
});

// Handle 404 - Not Found
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Set the port
const PORT = process.env.PORT || 3001;  // Provide a default port if none is specified in the environment variables

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
