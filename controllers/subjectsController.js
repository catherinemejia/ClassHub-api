const subjectsController = (subjects) => {

    const get = (req, res) => {
        const teacherId = req.query.userId;
        let subjectsList = [...subjects];
        if (teacherId !== undefined) {
            subjectsList = subjectsList.filter(v => v.userId == teacherId);
        }
        res.json(subjectsList);
    }

    const getById = (req, res) => res.json(req.subject);

    return { get, getById };

}

module.exports = subjectsController;