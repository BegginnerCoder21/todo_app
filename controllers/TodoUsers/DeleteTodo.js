const urldb = "mongodb://127.0.0.1:27017/Tododb"
const { default: mongoose } = require('mongoose');
const connect = require('../../database/users/Tododb');
const todo_model = require('../../models/Todos/TodoModels');

const deleteTodo = async (req,res) => {
    try {
        connect(urldb);
        let idTodo = new mongoose.Types.ObjectId(req.params.todoId);
        const todos = await todo_model.deleteOne({_id : idTodo});
        if(todos.deletedCount === 1){
            res.status(200).json({messageSucces : "La tâche a été supprimer avec succès"});
        }else{
            res.status(200).json({messageError404 : "Aucune tâche n'a été trouvée"});
        }
    } catch (error) {
        console.log("Connexion a la base de donnéd échoué");
        console.log(error);
    }
}

module.exports = deleteTodo;
