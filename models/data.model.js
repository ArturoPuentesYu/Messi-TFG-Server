const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema "titulo"
const tituloSchema = new Schema({
    año: Number,
    resultado: String
});

// Define el esquema principal
const playerSchema = new Schema({
    nombre: { type: String, required: true },
    pais: { type: String, required: true },
    club: { type: String, required: false },
    partidos_jugados: { type: Number, required: true },
    goles: { type: Number, required: true },
    asistencias: { type: Number, required: true },
    tarjetas_amarillas: { type: Number, required: true },
    tarjetas_rojas: { type: Number, required: true },
    debut: { type: Date, required: true },
    titulos: { type: [tituloSchema], required: false }
}, {
    collection: 'player'
});

// Crea el modelo
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;

