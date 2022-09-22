const rolesController = (Parent) => {

    const post = (req, res) => {
        const role = new Parent(req.body);
        role.save();
        return res.status(201).json(role);
    }

    const get = (req, res) => {
        Parent.find((err, roles) => {
            if (err) {
                return res.send(err);
            }
            return res.json(roles);
        });
    }

    const getById = (req, res) => res.json(req.role);

    const put = (req, res) => {
        const { role } = req;
        role.name = req.body.name;
        req.role.save((err) => {
            if (err) {
                return res.send(err);
            }
            return res.json(role);
        });
    }

    const patch = (req, res) => {
        const { role } = req;

        if (req.body._id) {
            delete req.body._id;
        }
        Object.entries(req.body).forEach(item => {
            const key = item[0];
            const value = item[1];
            role[key] = value;
        });
        req.role.save((err) => {
            if (err) {
                return res.send(err);
            }
            return res.json(role);
        });
    }

    const remove = (req, res) => {
        req.role.remove((err) => {
            if (err) {
                return res.send(err);
            }
            return res.sendStatus(204);
        });
    }

    return { post, get, getById, put, patch, remove };

}

module.exports = rolesController;