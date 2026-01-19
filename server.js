require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => console.log("✅ You are connected to the database online!"))
    .catch((err) => console.error("❌ Connection error: ", err));

const Movie = require('./models/Movie');

 app.get('/api/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
            res.json(movies);
     } catch (err) {
            res.status(500).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Serverul ruleaza pe portul ${PORT}`);
});

app.post('/api/movies', async (req, res) => {
    const { title, description, imageUrl, year } = req.body;

    const movie = new Movie({
        title: title,
        description: description,
        imageUrl: imageUrl,
        year: year
    });

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});