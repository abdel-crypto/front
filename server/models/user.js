const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    objectifs: String,
    depense: String
});

module.exports = mongoose.model('user', userSchema, 'users');