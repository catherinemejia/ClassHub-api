const sectionsController = (sections) => {

    const get = (req, res) => {
        const subjectId = req.query.subjectId;
        let sectionsList = [...sections];
        if (subjectId !== undefined) {
            sectionsList = sectionsList.filter(v => v.subjectId == subjectId);
        }
        res.json(sectionsList);
    }
    
    const getById = (req, res) => res.json(req.section);

    return { get, getById };

}

module.exports = sectionsController;