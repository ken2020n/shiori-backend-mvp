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
            created_at: "created_at",
        })
        .from("goal")
        .where({user_id: userId});
}

module.exports = {
    create,
    getGoalsByUserId,
};