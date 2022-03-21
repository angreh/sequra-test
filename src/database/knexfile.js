var config = {
    client: 'mysql',
    connection: {
        port: 3306,
        host: 'db',
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