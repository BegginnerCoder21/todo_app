const express = require('express');
const getAllTodo = require('../../controllers/TodoUsers/GetAllTodo');
const addTodo = require('../../controllers/TodoUsers/AddTodo');
const updatedTodo = require('../../controllers/TodoUsers/UpdatedTodo');
const deleteTodo = require('../../controllers/TodoUsers/DeleteTodo');
const routeTodo = express.Router();

routeTodo.route('/getTodo').get(getAllTodo);
routeTodo.route('/addTodo').post(addTodo);
routeTodo.route('/updatedTodo/:todoId').put(updatedTodo);
routeTodo.route('/deleteTodo/:todoId').delete(deleteTodo);

module.exports = routeTodo;
