# Clés primaires (PK, primary key)

Une clé primaire est une donnée qui permet d'identifier un enregistrement d'une table 

Quelques caractéristiques :
- La clé primaire est unique
- Une clé primaire est obligatoire

Pour créer dans une table une colonne qui contiendra la clé primaire on pourra utiliser les mots clés  PRIMARY KEY :

```sql

CREATE TABLE "promo" (
  "id" INT PRIMARY KEY,
);
```

On peut demander au SGBDR de gérer cette colonne (on le laisse trouver un id unique pour chaque nouvelle ligne insérée), pour faire ça on utilisera le type SERIAL :

```sql
CREATE TABLE "promo" (
  "id" SERIAL PRIMARY KEY,
);
```


# Clés étrangères (FK, foreign key)

Un clé étrangère est, dans une table, une donnée qui fait référence à une donnée déjà existante dans une autre table. 

On pourra faire un lien entre une ligne de la table student avec une ligne déjà éxistante dans la table promo

Par exemple l'étudiant 5 est lié à la promo 228

Ce que ça implique: 
- une colonne dite de clé étrangère ne contient que des valeurs qui existe déjà dans la colonne référencée (pour notre exemple on ne peut donc associé un élève qu'avec une promo éxistante)
- On ne peut pas supprimer une ligne référencée par une clé étrangère (pour notre exemple, je ne peux pas supprimer la promo 228 tant que des élévé y sont associé)

La bonne pratique veut qu'une colonne FK fait toujours référence a une colonne PK


Pour créer une contrainte référentielle (donc une clé étrangère) on utilise le mot clé REFERENCES :

``` sql
CREATE TABLE "student" (
  "id" SERIAL PRIMARY KEY,
  "promo_id" INT REFERENCES "promo"("id")
);
```


