const attendancesController = (attendances) => {

    const post = (req, res) => {
        const attendance = req.body;
        for(x = 0; x < attendance.length; x++) {
            attendance[x].id = (attendances.length + 1).toString();
            attendances.push(attendance[x]);
        }       
        return res.status(201).json(attendance);
    }

    const get = (req, res) => {
        const studentId = req.query.studentId;
        let attendanceList = [...attendances];
        if (studentId !== undefined) {
            attendanceList = attendanceList.filter(v => v.studentId == studentId);
        }
        res.json(attendanceList);
    }

    const getById = (req, res) => res.json(req.attendance);

    return { post, get, getById };

}

module.exports = attendancesController;