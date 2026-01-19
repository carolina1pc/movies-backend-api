const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    imageUrl: String,
    year: Number,
    tmdbId: String,
});

module.exports = mongoose.model('Movie', MovieSchema);