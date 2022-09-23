const examsController = (exams) => {

    const post = (req, res) => {
        const exam = req.body;
        for(x = 0; x < exam.length; x++) {
            exam[x].id = (exams.length + 1).toString();
            exams.push(exam[x]);
        }       
        return res.status(201).json(exam);
    }

    const get = (req, res) => {
        const studentId = req.query.studentId;
        let examsList = [...exams];
        if (studentId !== undefined) {
            examsList = examsList.filter(v => v.studentId == studentId);
        }
        res.json(examsList);
    }

    const getById = (req, res) => res.json(req.exam);

    return { post, get, getById };

}

module.exports = examsController;