const express = require('express');
const usersController = require('../controllers/usersController');

const routes = (users) => {

    const userRouter = express.Router();

    const controller = usersController(users);

    userRouter.route('/users')
        .post(controller.post)
        .get(controller.get);

    // middleware
    userRouter.use('/users/:id', (req, res, next) => {
        const user = users.find(u => u.id == req.params.id);
        if (user) {
            req.user = user;
            return next();
        }
        return res.sendStatus(404);
    });

    userRouter.route('/users/:id')
        .get(controller.getById)

    return userRouter;
}

module.exports = routes;