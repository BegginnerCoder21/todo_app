const mongoose = require('mongoose');

const todo_model =new mongoose.Schema({
    todo : {
        type : String,
        required : true,
    },
    author : {
        type : String,
        uppercase : true,
        required  : true
    }
});

const model = mongoose.model('todo_table',todo_model);

module.exports = model;