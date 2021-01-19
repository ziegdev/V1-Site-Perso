# MCD

On cherche à concervoir de manière conceptuelle (donc on reste loin du concret) la structure de notre base de donnée

On va repertorier les entités (STUDENT, PROMO) ainsi que les relations entre ces entités (BELONGS TO).

On ajoutera ensuite les cardinalité pour préciser les relation entre entités
Quelques regles a suivre :
- Chaque relation aura une cardinalité par extremités (donc si on a une relatione ntre 2 tables on aura 2 cardinalités)
- Chaque cardinalité est composé de 2 elements (01, 0N, 1N, NN)
- chaque element de la cardinalité ne peut etre que 0, 1 ou N

http://mocodo.wingi.net/

```
STUDENT: id, first_name, last_name, github_username, profile_picture_url
BELONGS TO, 11 STUDENT, 0N PROMO
PROMO: id, name
```