const express = require('express');
const sectionsController = require('../controllers/sectionsController');

const routes = (sections) => {

    const sectionRouter = express.Router();

    const controller = sectionsController(sections);

    sectionRouter.route('/sections')
        .get(controller.get);

    // middleware
    sectionRouter.use('/sections/:id', (req, res, next) => {
        const section = sections.find(u => u.id == req.params.id);
        if (section) {
            req.section = section;
            return next();
        }
        return res.sendStatus(404);
    });

    sectionRouter.route('/sections/:id')
        .get(controller.getById)

    return sectionRouter;
}

module.exports = routes;