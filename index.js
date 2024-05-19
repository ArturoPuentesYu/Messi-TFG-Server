const express = require('express');
const corsMiddleware = require('./corsConfig.js');
require('dotenv').config(); 
const connectDB = require('./config/database.js');
const app = express();

// Connectar a la base de datos
connectDB();

// Usar CORS para todas las solicitudes
app.use(corsMiddleware);

// Require routes
const userRoutes = require('./routes/user.route.js'); 
const dataRoutes = require('./routes/data.route.js'); 
// Middleware para analizar application/json
app.use(express.json());

// Uso de rutas con una ruta base para todos los puntos de conexión relacionados con la usuaria
app.use('/api/users', corsMiddleware, userRoutes);
app.use('/api/data', corsMiddleware, dataRoutes);

// Ruta básica para probar que el servidor está operativo
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Project!');
});

// Menejo de 404 - Not Found
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Proveer el puerto de las variables de entorno o uno predeterminado
const PORT = process.env.PORT || 3000;  

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
