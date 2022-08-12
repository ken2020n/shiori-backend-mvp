/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("goal", function (table) {
        table.increments("id").primary();
        table.integer("user_id")
            .references("id")
            .inTable("user")
            .onDelete("CASCADE")
            .notNullable();
        table
            .string("title", 64)
            .notNullable()
            .index();
        table.time("created_at");
        table.time("updated_at");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("goal");
};
