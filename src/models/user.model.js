const knex = require("../knex");

const register = async (user) => {
    return knex("user").insert({
        email: user.email,
        password: user.password,
    });
}

const login = async (user) => {
    return knex
        .select({
            id: "id",
            email: "email",
        })
        .from("user")
        .where({email: user.email})
        .where({password: user.password})
        .first();
};

module.exports = {
    register,
    login
};