// getting-started.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Pole tytuł jest wymagane']
    },
    vote: {
        type: Number,
        required: [true, 'Pole opis jest wymagane'],
        default: 0
    },

});

module.exports = mongoose.model('Quiz', quizSchema);