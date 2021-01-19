// Je demande a la librairie .env de charger les varibales définies dans le fichier .env dans l'environnementde mon application
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');
const router = require('./app/router');
const app = express();
// Je demande dans mon application à récupérer une variable d'environnement pour déterminer quel port utiliser pour express
// si on ne me donne aucune variable PORT dans l'environnement alors je prend la valeur 3000
const port = process.env.PORT || 3000;

// on configure EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// on configue un middleware pour les fichiers statiques (assets)
app.use(express.static(path.join(__dirname, 'public')));

// j'ajoute le middleware qui permet de traitr les données envoyée par un formulaire
// Il va traduire des données qui ont été envoyées sous la forme d'une URL encodée
// par exemple : promo=228&first_name=&last_name=&github_username=
// va etre traduit sous la forme d'un objet { promo: 228, first_name: .... }
app.use(express.urlencoded({extended: true}));


// j'initialise le middleware qui gere la session
app.use(session({
    secret: "erfgsdf1gsd65f1g6s5df1g5s1ddg6s1dfgdwd5fg1s23dfgetrtg",
    resave: false,
    saveUninitialized: true
}));

// on cdemande à express d'utiliser le routeur que l'on a configuré dans le fichier router.js
app.use(router);


app.use(function(req, res, next){
    res.status(404);
    res.render('404')
});

app.listen(port, () => {
    console.log(`Serveur lancé : http://localhost:${port}`);
});