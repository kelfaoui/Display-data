// importe le module Express.js, qui est un framework Node.js pour créer des applications web.
var express = require('express')

// utilisé pour analyser les données envoyées au serveur au format JSON.
var bodyParser = require('body-parser')

// charge les données du fichier JSON graph.json situé dans le dossier data,pour répondre aux requêtes ultérieurement.
var jsonData = require("./data/graph.json")

//  pour permettre à certaines origines (liens) d'accéder à l'API
var cors = require('cors');

// Cela crée une instance d'Express.js, qui représente l'application web.
var app = express();

// pour autoriser toutes les pages à accéder à l'API
app.use(cors());

// Le middleware body-parser est utilisé ici pour analyser les données JSON envoyées au serveur.
app.use(bodyParser.json());

// creer une route pour recuperer les donnes 
app.get('/', function(request, response){

   response.send(jsonData);    // (renvoyer les donnes aux clients)
});

// le serveur écoutera les requêtes sur ce port.
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Le server est démarré au port : ${PORT} `);
}) 
