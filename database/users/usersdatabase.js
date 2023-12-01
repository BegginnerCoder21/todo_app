const { default: mongoose } = require("mongoose");


const connect = async (urldb) => {
    try {
        await mongoose.connect(urldb);
        console.log("Connexion à la base donnée reussi !");

    } catch (error) {
        console.log(error);
        handleError(error);
    }
}

module.exports = connect;