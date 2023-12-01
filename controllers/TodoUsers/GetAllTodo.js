const urldb = "mongodb://127.0.0.1:27017/Tododb"
const connect = require('../../database/users/Tododb');
const todo_model = require('../../models/Todos/TodoModels');

const getAllTodo = async (req,res) => {
    try {
        connect(urldb);
        const todos = await todo_model.find().exec();
        if(todos.length > 0){
            res.status(200).json(todos);
        }else{
            console.log("Aucune tâche n'a été enregistré");
        }
    } catch (error) {
        console.log("Connexion a la base de donnéd échoué");
        console.log(error);
    }
}

module.exports = getAllTodo;