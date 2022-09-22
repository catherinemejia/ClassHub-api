const express = require('express');
const rolesController = require('../controllers/rolesController');

const routes = (Role) => {

    const roleRouter = express.Router();

    const controller = rolesController(Role);

    roleRouter.route('/roles')
        .post(controller.post)
        .get(controller.get);

    // middleware
    roleRouter.use('/roles/:id', (req, res, next) => {
        Role.findById(req.params.id, (err, role) => {
            if (err) {
                return res.send(err);
            }
            if (role) {
                req.role = role;
                return next();
            }
            return res.sendStatus(404);
        });
    });

    roleRouter.route('/roles/:id')
        .get(controller.getById)
        .put(controller.put)
        .patch(controller.patch)
        .delete(controller.remove)

    return roleRouter;
}

module.exports = routes;