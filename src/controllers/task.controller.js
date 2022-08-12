const taskModel = require("../models/task.model");

const create = async (req, res) => {
    const task = req.body;
    try {
        const result = await taskModel.create(task);
        if (result.rowCount === 1) {
            res.sendStatus(200);
        } else {
            res.status(500).send("Failed to create task");
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const getTasksByGoalId = async (req, res) => {
    const goalId = req.params.goalId;
    const result = await taskModel.getTasksByGoalId(goalId);
    if(result === undefined) {
        res.sendStatus(404);
    } else {
        res.status(200).send(result);
    }
}

module.exports = {
    create,
    getTasksByGoalId,
}