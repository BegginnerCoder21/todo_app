const express = require('express');
const getAllTodo = require('../../controllers/TodoUsers/GetAllTodo');
const addTodo = require('../../controllers/TodoUsers/AddTodo');
const updatedTodo = require('../../controllers/TodoUsers/UpdatedTodo');
const deleteTodo = require('../../controllers/TodoUsers/DeleteTodo');
const getTodo = require('../../controllers/TodoUsers/GetTodo');
const routeTodo = express.Router();

routeTodo.route('/getTodo').get(getAllTodo);
routeTodo.route('/addTodo').post(addTodo);
routeTodo.route('/updatedTodo/:todoId').put(updatedTodo);
routeTodo.route('/deleteTodo/:todoId').delete(deleteTodo);
routeTodo.route('/todo/:todoId').get(getTodo);

module.exports = routeTodo;
