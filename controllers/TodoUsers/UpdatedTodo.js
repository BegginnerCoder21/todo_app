const urldb = "mongodb://127.0.0.1:27017/Tododb"
const { default: mongoose } = require('mongoose');
const connect = require('../../database/users/Tododb');
const todo_model = require('../../models/Todos/TodoModels');

const updatedTodo = async (req,res) => {
    try {
        connect(urldb);
        let idTodo = new mongoose.Types.ObjectId(req.params.todoId);
        let reqTodo = req.body.todo;
        let reqAuthor = req.body.author;
        const upTodo = await todo_model.updateOne({_id : idTodo},{
            todo : reqTodo,
            author : reqAuthor
        });
        if(upTodo.modifiedCount === 1){
            res.status(200).json({messageSucces : "Utilisateur modifié avec succès"});
        }else{
            res.status(404).json({ message404 : "Ancun utilisateur n'a été trouvé"});
        }
    } catch (error) {
        console.log("Connexion à la base de donnée a échoué");
        console.log(error);
    }
}

module.exports = updatedTodo;