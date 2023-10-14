const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const person = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    favoriteFood: {
        type: Array,
        required: true,
    },
},{timestamps: true});

const Model = mongoose.model('point', person);
module.exports = Model