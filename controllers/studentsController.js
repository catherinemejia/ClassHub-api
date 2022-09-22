const studentsController = (students) => {

    const get = (req, res) => {
        const parentId = req.query.parentId;
        const sectionId = req.query.sectionId;
        let studentsList = [...students];
        if (parentId !== undefined) {
            studentsList = studentsList.filter(v => v.parentId == parentId);
        }
        if (sectionId !== undefined) {
            studentsList = studentsList.filter(v => v.sectionId == sectionId);
        }
        res.json(studentsList);
    }

    const getById = (req, res) => res.json(req.student);

    return { get, getById };

}

module.exports = studentsController;