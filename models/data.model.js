const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for "titulo"
const tituloSchema = new Schema({
    año: Number,
    resultado: String
});

// Define the main schema for the player
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
    titulos: { type: [tituloSchema], required: false }  // Embedding titulo schema as an array
}, {
    collection: 'player'
});

// Create the model
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;

