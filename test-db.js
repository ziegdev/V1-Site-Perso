
// Je récupère le modèle de Client PG depuis la librairie 'pg'
const { Client } = require('pg');

// je crée un nouveau client grâce au modèle fourni
// la variable client contient donc un client pg permattant d'interroger la BDD
// pour se connecter au bon server PG je doit préciser les informations suivantes :
// - Comment se connecter : protocole postgresql => postgresql://
// - Je me connecte avec quel utiliseur => etudiant
// - Quel mot de passe utiliser => js4life
// - Quel est l'hôte => pg.oclock.lan
// - quel est le port utilisé par le serveur PG => 5432
// - Sur ce serveur, à quelle BDD je veux me connecter => trombi

// Lorsque je crée mon nouveau client PG je transmet la chaine de connexion
const client = new Client('postgresql://etudiant:js4life@pg.oclock.lan:5432/trombi');

// je demande au client d'établir la connexion avec le serveur PG
client.connect();

// je fabrique ma requete SQL (c'est juste une chaine de caractères au format SQL)
const sqlQuery = "SELECT * FROM promo";

// je demande au client d'envoyer la requete au server grâce à la methode query()
// le premier parametre de la methode query c'est la requete à executer (en SQL)
// le deuxieme parametre c'est la fonction (callback) qui sera appelé lorsque le client aura reçu la reponse du server de BDD
client.query(sqlQuery, (err, res) => {
    // Cette fonction n'est éxecutée que plus plus tard, lorsque le serveur aura répondu à ma requete

    // Ici je peux utiliser les reusltats issus de ma requete car cette fonction ne s'execute QUE lorsque les resultats sont dispo

    // le client PG transmettra a cette fonction 2 arguments :
    // - un objet qui contient des erreur S'IL Y A EU DES ERREURS
    // - un objet qui contient les resultats S'IL N'Y A PAS EU D'ERREURS
    
    // Dans l'objet qui contient les résultats je peux récupérer le nombre de resultats obtenus :
    console.log("On a reçu " + res.rowCount + " résultats");

    // pour récupérer le tableau des résultats (les données) on peut utiliser res.rows
    console.table(res.rows);
    
});

// ici je NE PEUX PAS utiliser les résultats issus de ma requete SQL
// Car il ne sont pas encore arrivé





