# Sessions

## installation de la librairie express-session

https://www.npmjs.com/package/express-session


Cette librairie va créer une nouvelle session pour ton les clients (navigateurs) qui se connectent puis va leur envoyer un cookie pour garder en memoire le numero de session associé à chaque navigateur

```
npm i express-session
```

## Ajouter le middleware session

On utilise le middleware session dans notre application express et lui transmet la configuration necesaire.
Pour une utilisation simple et non securisé on ne fournis qu'un seul parametre : le secret


```js
// index.js

const session = require('express-session');

// après avoir initialisé notre app mais avant le router
// ...

app.use(session({
    secret: "erfgsdf1gsd65f1g6s5df1g5s1ddg6s1dfgdwd5fg1s23dfgetrtg",
    resave: false,
    saveUninitialized: true
}));

// ...
// ensuite on pourra utiliser la session dans les controleurs

```

Normalement lorsque l'on rafraichit la page, un cookie va etre créé sur le navigateur. CE cookie contien l'id de la session qui vient d'etre créée pour mon navigateur.


## Comment utiliser la session

Je peux ensuite utiliser la session dans les controleurs, pour acceder a la session j'utilise l'objet request et la propriété session : request.session 

A l'intérieur de cette propriété vous pouvez mettre ce que vous voulez.


Par exemple pour ajouter un variable 'lastViewedPromo' il suffit de faire :

```js
// dans un controller

const promo = // .. on recupère depuis la BDD

// puis n la stock en session si besoin
request.session.lastViewedPromo = promo;

// on peut stocker de nombreuses variables dans la session (du moment qu'elles n'ont pas le meme nom, sinon elles vont s'écraser l'une l'autre)
request.session.pageCount ++;
// etc ...

```

Plus tard pour lire le contenu de la session :

```js
// dans un controller

const lastViewedPromo = request.session.lastViewedPromo;
const cart = request.session.cart;

// on peut ensuite utiliser cette variable dans la template par exemple
response.render('dossier/nom-de-la-template', { lastViewedPromo, cart });

``` 

