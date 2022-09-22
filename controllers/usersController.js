const usersController = (users) => {

    const post = (req, res) => {
        const user = req.body;
        user.id = (users.length + 1).toString();
        users.push(user);
        return res.status(201).json(user);
    }

    const get = (req, res) => res.json(users);

    const getById = (req, res) => res.json(req.user);

    return { post, get, getById };

}

module.exports = usersController;