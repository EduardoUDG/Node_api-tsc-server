import { Sequelize } from "sequelize";


const db = new Sequelize( '_api-node-tsc', 'root', 'password', {
        host: 'localhost',
        dialect: 'mysql',
        // logging: false,
    });


export default db;