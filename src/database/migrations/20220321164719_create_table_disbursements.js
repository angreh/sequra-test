/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = knex => {
    return knex.schema.createTable('disbursements', t => {
        t.increments('id')
            .unsigned()
            .primary()

        t.integer('merchant_id', 10)
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('merchants')

        t.float('amount')
            .notNullable()

        t.timestamp('paid_at').defaultTo(knex.fn.now())

        t.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => {
    return knex.schema.dropTable('disbursements')
}

exports.config = { transaction: false }