const dataMapper = require('../dataMapper');

const adminController = {

    // affiche le formulaire vide pour ajouter un étudiant
    showAddStudentForm: (request, response) => {
        
        dataMapper.findAllPromos((promos) => {
            response.render('admin/addStudent', { promos });
        });
    },

    // ajouter une étudiant dans le BDD puis demande au navigateur d'aller voir sur la page de la promo dans laquelle on vient d'ajouter un étudiant
    addStudent:  (request, response) => {

        // request.body contient les données du formulaire
        // les données sont sous la forme d'un objet { promo: 228, first_name: "luc" , ....}
        // ces données ont été récupérées grâce au middleware urlencoded

        dataMapper.addStudent(request.body, (errors) => {
            // lorsque le dataMapper aura fini d'inserer les données dans la BDD on va ...
            if(errors) {
                console.error(errors);
            } else {
                response.redirect(`/promo/${request.body.promo}`);
            }
        });

    }

};

module.exports = adminController; 