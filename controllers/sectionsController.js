const sectionsController = (sections) => {

    const get = (req, res) => res.json(sections);
    
    const getById = (req, res) => res.json(req.section);

    return { get, getById };

}

module.exports = sectionsController;