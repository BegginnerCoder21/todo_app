const mongoose = require('mongoose');

const headerAccess = (req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");//indique quelle application peut acceder aux ressources de notre serveur
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");//indique quelles methodes http sont autorisé pour les requêtes provenant d'autre plateforme
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");//les types d'entête qui sont autorisé lors d'une requête provenant de differentes plateforme
    next();
}

module.exports = headerAccess;