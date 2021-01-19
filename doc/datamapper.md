# Data Mapper

Il s'agit d'une interface (interprete) qui vient s'intercaller entre le controller et la BDD.

Lorsque le controller va demander les promo, le datamapper va interpreter cette demande et envoyer une requete SQL a la BDD

Il peut s'agir d'un module simple ou d'une libraire complexe (Doctrine en php)

## Processus

- Le controleur execute une fonction du datamapper (findAllPromos()) et fournir du code à exécuter (callback) lorsque les données seront prètes (reçus du server pg).
- Le datamapper prépare la requete
- Le datamapper envoi la requetes au server puis attend
- Lorsque la reponse arrive le datamapper va executer les instructions fournies par le controller (execute le callback)

Souvent un callback a besoin de recevoir en argument les données provenant de la BDD 