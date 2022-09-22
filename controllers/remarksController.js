const remarksController = (remarks) => {

    const post = (req, res) => {
        const remark = req.body;
        remark.id = (remark.length + 1).toString();
        remarks.push(remark);
        return res.status(201).json(remark);
    }

    const get = (req, res) => {
        const studentId = req.query.studentId;
        let remarksList = [...remarks];
        if (studentId !== undefined) {
            remarksList = remarksList.filter(v => v.studentId == studentId);
        }
        res.json(remarksList);
    }

    const getById = (req, res) => res.json(req.remark);

    return { post, get, getById };

}

module.exports = remarksController;