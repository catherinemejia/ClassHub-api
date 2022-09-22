const express = require('express');
const remarksController = require('../controllers/remarksController');

const routes = (remarks) => {

    const remarkRouter = express.Router();

    const controller = remarksController(remarks);

    remarkRouter.route('/remarks')
        .post(controller.post)
        .get(controller.get);

    // middleware
    remarkRouter.use('/remarks/:id', (req, res, next) => {
        const remark = remarks.find(u => u.id == req.params.id);
        if (remark) {
            req.remark = remark;
            return next();
        }
        return res.sendStatus(404);
    });

    remarkRouter.route('/remarks/:id')
        .get(controller.getById)

    return remarkRouter;
}

module.exports = routes;