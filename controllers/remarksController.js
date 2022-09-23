const remarksController = (remarks) => {

    const post = (req, res) => {
        const remark = req.body;
        for(x = 0; x < remarks.length; x++) {
            remark[x].id = (remarks.length + 1).toString();
            remarks.push(remark[x]);
        }       
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