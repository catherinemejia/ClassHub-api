const express = require('express');
const attendancesController = require('../controllers/attendancesController');

const routes = (attendances) => {

    const attendanceRouter = express.Router();

    const controller = attendancesController(attendances);

    attendanceRouter.route('/attendances')
        .post(controller.post)
        .get(controller.get);

    // middleware
    attendanceRouter.use('/attendances/:id', (req, res, next) => {
        const attendance = attendances.find(u => u.id == req.params.id);
        if (attendance) {
            req.attendance = attendance;
            return next();
        }
        return res.sendStatus(404);
    });

    attendanceRouter.route('/attendances/:id')
        .get(controller.getById)

    return attendanceRouter;
}

module.exports = routes;