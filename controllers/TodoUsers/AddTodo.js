const urldb = "mongodb://127.0.0.1:27017/Tododb"
const connect = require('../../database/users/Tododb');
const todo_model = require('../../models/Todos/TodoModels');

const addTodo = async (req,res) => {
    try {
        connect(urldb);
        let reqTodo = req.body.todo;
        let reqAuthor = req.body.author;
        const todo = new todo_model({
            todo : reqTodo,
            author : reqAuthor
        });
        await todo.save();
        res.status(200).json({messageSucces : "Utilisateur a été ajouter avec succès"});
    } catch (error) {
        console.log('Connexion a la base donnée echoué');
        console.log(error);
    }
}

module.exports = addTodo;