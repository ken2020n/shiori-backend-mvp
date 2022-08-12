const knex = require("../knex");

const create = async (task) => {
    return knex("task").insert({
        goal_id: task.goal_id,
        title: task.title,
        seconds: task.seconds
    });
}

const getTasksByGoalId = async (goalId) => {
    return knex
        .select({
            id: "id",
            goal_id: "goal_id",
            title: "title",
            seconds: "seconds"
        })
        .from("task")
        .where({goal_id: goalId});
}

module.exports = {
    create,
    getTasksByGoalId
};