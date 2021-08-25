const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    movieName:{
        type: String
    },
    img_movie:{
        type: String
    },
    year_of_release:{
        type: Number
    }
});  

const movies = mongoose.model('movies',moviesSchema);
module.exports = movies;