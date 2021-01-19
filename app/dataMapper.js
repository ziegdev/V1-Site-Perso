const client = require('./database');

// le dataMapper s'occupe de récupérer des données depuis la BDD puis d'envoyer le résultat dans le callback fourni par le controller
const dataMapper = {

    // Cette methode permettra a un controler de d'executer des instructions necessitant une liste des promos
    // le parametre callback contient les instructions qui devront être executées apres avoir récupéré les promo depuis la BDD
    findAllPromos: function(callback) {
        // on prépare notre requete
        const sqlQuery = `
            SELECT id, name 
            FROM promo 
            ORDER BY name`;

        // puis on l'envoi sur le serveur
        client.query(sqlQuery, (errors, results) => {
            // lorsque le serveur aura répondu
            // on extrait les résultats 
            const promos = results.rows;
            // puis onexecute les instruction stockées dans callback
            // j'envoi en argument du callback la vaariable qui contient les promos
            // ca tombe bien parceque le callback à un parametre "promos" qui va recevoir cet argument pour pouvoir utilise ces valeurs
            // le fait d'ajouter les () à callback va déclencher l'exécution des instructions qui sont la variable callback
            callback(promos);
        });
    },

    // cette focntion ne peut pas deviner l'id de la promo a chercher
    // donc on lui fourni en parametre
    // le controller va donc appeler cette fonction en lui donnant l'id de la promo a trouver et les instructions à exécuter lorsque le serveur pg aura repondu
    findPromo: function(id, callback) {

        const sqlQuery = `
            SELECT * 
            FROM promo 
            WHERE promo.id = ${id}`;

        client.query(sqlQuery, (errors, results) => {
            const promo = results.rows[0];
            callback(promo);
        });
    },

    findStudentsByPromo: function(id, callback) {

        const sqlQueryStudents = `
            SELECT * 
            FROM student 
            WHERE student.promo_id = ${id}
            ORDER BY student.last_name`;

        client.query(sqlQueryStudents, (errors, results) => {
            const promoStudents = results.rows;
            callback(promoStudents);
        });
    },

    findStudent: function(id, callback) {
        const sqlQuery = `
            SELECT *
            FROM student
            WHERE student.id = ${id}`;

        client.query(sqlQuery, (errors, results) => {
            const student = results.rows[0];
            callback(student);
        })
    },

    findAllStudents: function(page, callback) {
        const pageSize = 10;
        const offset = ((page - 1) * pageSize) + 1;

        const sqlQuery = `
            SELECT *
            FROM student
            ORDER BY last_name ASC, first_name ASC
            LIMIT ${pageSize} OFFSET ${offset}`;

        client.query(sqlQuery, (errors, results) => {
            const students = results.rows;

            callback(students);
        });
    },

    addStudent: function(data, callback) {

        // Pour éviter les attaques de type SQL INJECTION on utilise des requetes préparés
        // https://node-postgres.com/features/queries
        // le principe :
        // on fourni a la méthode client.query() la requete d'un coté et les valeur de l'autre
        // query()  va combiner la requete et les valeur en vérifiant que les valeurs ne contiennent pas de caractère '
        // dans la requete le texte $1 sera remplacé par la premiere valeur et $2 va etre remplacé par la deuxieme ...
        const sqlQuery = `
            INSERT INTO student
            (
                first_name,
                last_name,
                github_username,
                profile_picture_url,
                promo_id
            )
            VALUES
            (
                $1,
                $2,
                $3,
                $4,
                $5
            )`;

        const values = [
            data.first_name,
            data.last_name,
            data.github_username,
            `https://github.com/${data.github_username}.png`,
            data.promo
        ];

        client.query(sqlQuery, values, (errors, results) => {
            callback(errors);
        });

    }

}

module.exports = dataMapper;