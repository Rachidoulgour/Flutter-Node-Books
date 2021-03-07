const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublicationSchema = Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    file: String,
    genre: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    created_at: String,
    
})
module.exports = mongoose.model('Publication', PublicationSchema);