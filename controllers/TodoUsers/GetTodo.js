const urldb = "mongodb://127.0.0.1:27017/Tododb";
const { default: mongoose } = require('mongoose');
const connect = require('../../database/users/Tododb');
const todo_model = require('../../models/Todos/TodoModels');

const getTodo = async (req,res) => {
    try {
        connect(urldb);
        let idTodo = new mongoose.Types.ObjectId(req.params.todoId);
        let todo = await todo_model.findById({_id : idTodo});
        res.status(200).json(todo);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getTodo;