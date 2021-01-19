# Création d'une nouvelle page sur mon appli

Exemple pour la création de la page de détail d'un étudiant

## Créer une route

```js
// app/router.js
const studentController = require('./controller/student');
//...
router.get('/student/:id', studentController.view);
```

## Créer un nouveau controller (si besoin)

```js
// app/controller/student.js

const studentController = {
    view: (request, response) => {
        response.render('student/view');
    }
}

module.exports = studentController;
```

## Créer la template

```js
// views/student/view.ejs
<%- include('../partials/_header.ejs') %>
    <h1>Detail d'un étudiant</h1>
<%- include('../partials/_footer.ejs') %>
```


A ce moment là on teste notre page, elle ne contient rien mais on peut déjà vérifier que le routeur fonctionne et la template aussi, et le controlleur.

http://localhost:3000/student/45


## Ajouter une méthode au dataMapper

je souhaite pouvoir récupérer un étudiant grâce a son id

```js
// app/dataMapper.js

//....

    findStudent: function(id, callback) {
        const sqlQuery = `
            SELECT *
            FROM student
            WHERE student.id = ${id}`;

        client.query(sqlQuery, (errors, results) => {
            const student = results.rows[0];
            callback(student);
        })
    }

//...
```

## j'utilise le datamapper dans mon controller

J'ajoute l'appel du datamapper dans mon controller et je lui fourni au callback pour faire une rendu de la template lorsque les données seront dispo

```js
// app/controller/student.js
const dataMapper = require('../dataMapper');

//...
    view: (request, response) => {
        const studentId = parseInt(request.params.id, 10);
        dataMapper.findStudent(studentId, (student) => {
            response.render('student/view', {student});
        });
    }
//...
```

## je modifie ma template pour utiliser les données

J'ai envoyé dans la template une variable "student" qui contient les données provenant de la BDD, je modifie ma template pour afficher ces données

```js
// views/student/view.ejs

//...
    <h1><%= student.first_name %> <%= student.last_name %></h1>
    <img src="<%= student.profile_picture_url  %>" width="80">
//...
```

## j'ajoute des liens vers ma nouvelle page

```js
// views/promo/view.ejs

//...
    <a href="/student/<%= student.id %>"><%= student.last_name %> <%= student.first_name %></a>  
//...
```