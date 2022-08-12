const goalModel = require("../models/goal.model");

const create = async (req, res) => {
    const goal = req.body;
    try {
        const result = await goalModel.create(goal);
        if (result.rowCount === 1) {
            res.sendStatus(200);
        } else {
            res.status(500).send("Failed to create goal");
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const getGoalsByUserId = async (req, res) => {
    const userId = req.params.userId;
    const result = await goalModel.getGoalsByUserId(userId);
    if(result === undefined) {
        res.sendStatus(404);
    } else {
        res.status(200).send(result);
    }
}

module.exports = {
    create,
    getGoalsByUserId,
}