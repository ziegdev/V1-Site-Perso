# Requetes SQL

## toutes les promos, dans l’ordre alphabétique

```sql
SELECT * 
FROM promo 
ORDER BY promo.name ASC;
```

## tous les étudiants, dans l’ordre alphabétique des noms de famille

```sql
SELECT * 
FROM student 
ORDER BY student.last_name ASC;
```

## tous les étudiants de la promo 135

```sql
SELECT * 
FROM student 
WHERE student.promo_id = 135;
```

## les étudiants dont le nom ou le prénom ressemble à « max »

On peut avoir plusieur conditions que l'on va combiner soit aveec l'opérateur AND (les conditions doivent toutes êtres respéctées) soit l'opérateur OR (l'une des conditions doit êtres respéctée)

Le ILIKE fonction comme le LIKE mais sans se soucier des majuscules ou minuscules

```sql
SELECT * 
FROM student
WHERE 
    student.first_name ILIKE '%max%'
    OR student.last_name ILIKE '%max%';
```


## Créer une nouvelle table

https://sql.sh/cours/create-table

```sql
CREATE TABLE tvshow
(
    id SERIAL,
    title VARCHAR(100),
    synopsis TEXT,
    release_date DATE
);
```


## Modifier une table éxistante

https://sql.sh/cours/alter-table




## Ajouter des données dans une table

https://sql.sh/cours/insert-into

pour échaper une ' il faut mettre ''

```sql
INSERT INTO tvshow (title, synopsis, release_date)
VALUES ('The mandalorian', 'Western de l''espace', '2019-11-16');


INSERT INTO tvshow (title, synopsis, release_date)
VALUES ('The flash', 'Un gars qui semble avoir oublié ses clés chez lui', '2017-11-16'),
       ('The 100', 'Déléguer l''avenir de l''humanité à des ados', '2017-11-16');
```

## Modifier des données dans une table

https://sql.sh/cours/update

```sql
UPDATE tvshow 
SET synopsis = 'l''homme le plus rapide du mon'
WHERE tvshow.id = 2;
```

## Supprimer des données dans une table

https://sql.sh/cours/delete

Pour supprimer plusieur lignes grâce aux IDs : https://sql.sh/cours/where/in


```sql
DELETE FROM tvshow
WHERE tvshow.id = 3;

DELETE FROM tvshow
WHERE tvshow.title ILIKE '%the%';

DELETE FROM tvshow
WHERE tvshow.id IN (1, 2, 3, 4);
```

## vider une table

Solution évidente mais pas rapide

```sql
DELETE FROM tvshow;
```

Solution efficace
https://sql.sh/cours/truncate-table

```sql
TRUNCATE TABLE tvshow;
```


## supprimer une table

```sql
DROP TABLE tvshow;
```


## Insérer dans la table « student » un étudiant qui s’appelle « Chuck Norris » appartenant à la promo 5

https://sql.sh/cours/insert-into


```sql
INSERT INTO student (promo_id, first_name, last_name)
VALUES (5, 'Chuck', 'Norris');
```

##  Insérer dans la table « promo » une promo qui s’appelle « César » et ne possède pas d’orga

https://sql.sh/cours/insert-into

Pour trouver la derniere valeur utilisé pour l'id on peut exécuter la requete suivante :
```sql
SELECT max(id) FROM promo;
```

```sql
INSERT INTO promo (name, id)
VALUES ('César', 248);
```

 ## Mettre à jour la promo 5 pour la renommer « Cleo »

https://sql.sh/cours/update

```sql
UPDATE promo
SET promo.name = 'Cleo'
WHERE promo.id = 5;
```

##  Supprimer la promo 123


https://sql.sh/cours/delete

```sql
DELETE FROM promo
WHERE promo.id = 123;
```