const knex = require("../knex");

const create = async (goal) => {
    return knex("goal").insert({
        user_id: goal.user_id,
        title: goal.title,
    });
}

const getGoalsByUserId = async (userId) => {
    return knex
        .select({
            id: "id",
            title: "title",
        })
        .from("goal")
        .where({user_id: userId});
}

const deleteGoal = async (id) => {
    return knex("goal")
        .del()
        .where({ id: id });
}

module.exports = {
    create,
    getGoalsByUserId,
    deleteGoal
};