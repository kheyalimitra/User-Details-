'use strict'

const pg = require("pg");
const config = require('./dbConfig.json');

class PGDriver {
    constructor() {
        this.pool = new pg.Pool({
            user: config.db_dev.user,
            host: config.db_dev.host,
            database: config.db_dev.database,
            password: config.db_dev.password,
            port: config.db_dev.port
        });
        this.table_name = config.db_dev.table_name;
    }
}

module.exports = PGDriver;