'use strict'

const pg = require("pg");
const config = require('../config/dbConfig.json');

class PGDriver {
    constructor() {

        this.pool = new pg.Pool({
            user: config.docker_db.user,
            host: config.docker_db.host,
            database: config.docker_db.database,
            password: config.docker_db.password,
            port: config.docker_db.port
        });
        this.table_name = config.docker_db.table_name;
    }
}

module.exports = PGDriver;