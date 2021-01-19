const dataMapper = require('../dataMapper');

const studentController = {
    view: (request, response) => {
        const studentId = parseInt(request.params.id, 10);
        dataMapper.findStudent(studentId, (student) => {
            response.render('student/view', {student});
        });
    },

    list: (request, response) => {
        const page = parseInt(request.query.page || 1, 10);

        dataMapper.findAllStudents(page, (students) => {
            response.render('student/list', { students, page });
        });
    }
}

module.exports = studentController;