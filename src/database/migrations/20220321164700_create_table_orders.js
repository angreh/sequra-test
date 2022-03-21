/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = knex => {
    return knex.schema.createTable('orders', t => {
        t.increments('id')
            .unsigned()
            .primary()

        t.integer('merchant_id', 10)
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('merchants')

        t.integer('shopper_id', 10)
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('shoppers')

        t.float('amount')
            .notNullable()

        t.boolean('paid')
            .notNullable()
            .defaultTo(false)

        t.timestamp('created_at').defaultTo(knex.fn.now())
        t.timestamp('completed_at').defaultTo(knex.fn.now())
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => {
    return knex.schema.dropTable('orders')
}

exports.config = { transaction: false }