const express = require('express');
const app = express();
const mongoose = require('mongoose');
const headerAccess = require('./controllers/AllowAccess/HeaderAccess');
const routeTodo = require('./routes/Todos/TodoRoute');
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(headerAccess);

app.use('/api',routeTodo);

const port = 2100;
app.listen(port, () => {
    console.log("le port 2100 est en attente de vos requêtes");
})