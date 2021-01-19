const dataMapper = require('../dataMapper');

const promoController =  {

    list: (request, response) => {

        dataMapper.findAllPromos((promos) => {
            response.render('promo/list', { 
                promos, 
                lastViewedPromo: request.session.lastViewedPromo 
            });
        });

    },

    // affiche les étudiant associés à une promo
    view: (request, response) => {

        // récupérer l'id de la promo que l'on souhaite afficher
        // cet id est un parametre d'url qui s'appelle "id"
        const promoId = parseInt(request.params.id, 10);

        dataMapper.findPromo(promoId, (promo) => {
            dataMapper.findStudentsByPromo(promoId, (promoStudents) => {
                // j'ai maintenant a ma disposition la promo et les étudiant de cette promo, je peux donc afficher la page (faire le rendu de la template)
                
                //juste avant de repondre au navigateur, j'enregistre en session la promo demandée
                request.session.lastViewedPromo = promo;

                
                response.render('promo/view', { promo, promoStudents });
            })
        })
    
    }

}

module.exports = promoController;