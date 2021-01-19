# Utiliser PG en local

## Se connecter en tant qu'administrateur

Se connecter en tant qu'administrateur 

- 1 - Se connecter a linux avec l'utilisateur postgres

```
sudo -i -u postgres
```

- 2 -- on se connecte au server pg local avec psql

```
psql
```

## Créer un utilisateur

```
CREATE ROLE tvshowuser WITH LOGIN PASSWORD 'tvshowpassword';
```


## Modifier un utilisateur

```
ALTER ROLE tvshowuser WITH PASSWORD 'nouveaumotdepasse';
```

## Créer une BDD

```
CREATE DATABASE tvshow OWNER tvshowuser;
```

Une fois l'utilisateur et la BDD connectée on peut se déconnecter de  l'utilisateur postgres (administrateur).
Donc on ferme le temrinal et on en ouvre un nouveau.

Normalement, on est connecté comme d'hab avec l'utilisateur "etudiant"

## Se connecter à notre BDD

```
psql -U tvshowuser -d tvshow
```


## Quelques commandes utile

- \dt : afficher la liste des tables présentes dans la base de donnée
- \d nom_de_la_table : affiche la structure de la table


## éxecuter dans une BDD les instructions SQL présentes dans un fichier

```
psql -U tvshowuser -d tvshow -f le_nom_du_fichier
```
