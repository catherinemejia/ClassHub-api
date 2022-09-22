const classesController = (classes) => {

  const post = (req, res) => {
      const data = req.body;
      data.id = (classes.length + 1).toString();
      classes.push(data);
      return res.status(201).json(data);
  }

  const get = (req, res) => {
      let classesList = [...classes];
      res.json(classesList);
  }

  const getById = (req, res) => res.json(req.data);

  return { post, get, getById };

}

module.exports = classesController;
