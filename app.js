const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.urlencoded({extended : true}));
app.use(express.json());



const port = 2100;
app.listen(port,() => {
    console.log("le port 2100 est en attente de vos requêtes");
})