const express = require('express');
const classesController = require('../controllers/classesController')

const routes = (classes) => {

    const classRouter = express.Router();

    const controller = classesController(classes);

    classRouter.route('/classes')
        .post(controller.post)
        .get(controller.get);

    // middleware
    classRouter.use('/classes/:id', (req, res, next) => {
        const data = classes.find(u => u.id == req.params.id);
        if (data) {
            req.data = data;
            return next();
        }
        return res.sendStatus(404);
    });

    classRouter.route('/classes/:id')
        .get(controller.getById)

    return classRouter;
}

module.exports = routes;
