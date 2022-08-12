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
            .time("begin_at")
        table
            .time("end_at")
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("task");
};
