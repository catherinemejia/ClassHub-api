const express = require('express');
const subjectsController = require('../controllers/subjectsController');

const routes = (subjects) => {

    const subjectRouter = express.Router();

    const controller = subjectsController(subjects);

    subjectRouter.route('/subjects')
        .get(controller.get);

    // middleware
    subjectRouter.use('/subjects/:id', (req, res, next) => {
        const subject = subjects.find(s => s.id == req.params.id);
        if (subject) {
            req.subject = subject;
            return next();
        }
        return res.send(404);
    });

    subjectRouter.route('/subjects/:id')
        .get(controller.getById)

    return subjectRouter;
}

module.exports = routes;