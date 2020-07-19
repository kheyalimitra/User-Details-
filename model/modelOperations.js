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

class ModelOperations {

    constructor() {
        this.client = new PGDriver();
    }

    async fetchUser(id) {
        const conn = await this.client.pool.connect();
        try {
            
            const queryString = `SELECT id, display_name, email, country FROM ${this.client.table_name} WHERE id=$1`;
            const response = await conn.query(queryString, [id]);
            console.log('response: ', response);
            return response;
        } catch(e) {
            throw e;
        } finally {
            conn.release();
        }
    }

    async saveUser(newUser) {
        console.log('saveUser');
        const conn = await this.client.pool.connect();
        try {
            const queryString = `INSERT INTO ${this.client.table_name} (display_name, email, country) VALUES ($1, $2, $3) RETURNING id;`;
            const response = await conn.query(queryString, [newUser.name, newUser.email, newUser.country]);
            return {
                id: response.rows[0].id,
                name: newUser.name,
                email: newUser.email,
                country: newUser.country
            };
        } catch(e) {
            throw e;
        } finally {
            conn.release();
        }
    }
}
module.exports = ModelOperations;