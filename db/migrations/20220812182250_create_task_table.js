/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("task", function (table) {
        table.increments("id").primary();
        table.integer("goal_id")
            .references("id")
            .inTable("goal")
            .onDelete("CASCADE")
            .notNullable();
        table
            .string("title")
        table
            .integer("seconds")
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("task");
};
