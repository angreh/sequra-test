/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => {
    return knex.schema.createTable('merchants', t => {
        t.increments('id')
            .unsigned()
            .primary()

        t.string('name')
            .notNullable()

        t.string('email', 255)
            .notNullable()

        t.string('CIF', 15)
            .notNullable()

        t.timestamps()
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => {
    return knex.schema.dropTable('merchants')
}

exports.config = { transaction: false }