const mongoose = require('mongoose');

const todo_model =new mongoose.Schema({
    todo : String,
    author : {
        type : String,
        uppercase : true
    }
});

const model = mongoose.model('todo_table',todo_model);

module.exports = model;