# Variables d'environnement

On souhaite utiliser notre application dans des environnements d'execution différents

Par exemple : lorsque l'on developpe on peut lancer l'application  et la faire écouter sur le port 3000, mais lorsque l'on déploi l'application pour notre client on veut pouvoir la faire écouter le port 80

Pour parametrer mon ammplication je peut utiliser dans variables d'environnement

Ce sont des variables définies en dehor de mon application, utilisable a l'intérieur de mon application.

Donc sans changer le code de mon application son comportment peut etre modifié.

## Variables d'environnement standard

On déclare les variable dans le terminal avant d'executer notre appli

```
PORT=3020 node index.js
```

Dans l'application on peut utiliser cette variable grâca a la ligne suivante

```
process.env.PORT
``` 

## Variables d'environnement dans un fichier .env

On peut définir un fichier qui contient nos variables d'environnement

.env
```
PORT=3030
PASSWORD=monmotdepasse
```

Dans notre projet on install dotenv

```
npm i dotenv
```

Dès le début de mon application je demande a la librairie dotenv de charger le contenu du fichier ".env" dans l'environnement d'éxecution de mon appli

```
require('dotenv').config();
```

On peut ensuite utiliser les variable d'environnement chargées depuis le fichier .env comme d'habitude avec :

```
const port = process.env.PORT

const password = process.env.PASSWORD
``` 


## Bonne pratiques 

- En général les variables d'environnement sont en majuscules
- En général on ne commit pas les fichiers .env (contient parfois des mot de passe) donc on le met dans le fichier .gitignore
- En général on met a disposition un fichier .env.dist ou .env.exemple pour que nos collègues sachent qu'il est necessaire de définir quelques variables d'environnement (dont on donne le nom)

