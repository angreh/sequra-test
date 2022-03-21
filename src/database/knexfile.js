var config = {
    client: 'mysql',
    connection: {
        port: 3308,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'sequre_db'
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: "./migrations"
    },
    seeds: {
        directory: './seeds'
    }
}

module.exports = config