const express = require('express');
const studentsController = require('../controllers/studentsController');

const routes = (students) => {

    const studentRouter = express.Router();

    const controller = studentsController(students);

    studentRouter.route('/students')
        .get(controller.get);

    // middleware
    studentRouter.use('/students/:id', (req, res, next) => {
        const student = students.find(u => u.id == req.params.id);
        if (student) {
            req.student = student;
            return next();
        }
        return res.sendStatus(404);
    });

    studentRouter.route('/students/:id')
        .get(controller.getById)

    return studentRouter;
}

module.exports = routes;