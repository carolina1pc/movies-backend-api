const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    year: Number,
    tmdbId: String
});

module.exports = mongoose.model('Movie', MovieSchema);