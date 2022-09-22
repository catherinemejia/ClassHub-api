const express = require('express');
const examsController = require('../controllers/examsController');

const routes = (exams) => {

    const examRouter = express.Router();

    const controller = examsController(exams);

    examRouter.route('/exams')
        .post(controller.post)
        .get(controller.get);

    // middleware
    examRouter.use('/exams/:id', (req, res, next) => {
        const exam = exams.find(u => u.id == req.params.id);
        if (exam) {
            req.exam = exam;
            return next();
        }
        return res.sendStatus(404);
    });

    examRouter.route('/exams/:id')
        .get(controller.getById)

    return examRouter;
}

module.exports = routes;