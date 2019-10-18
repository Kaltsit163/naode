const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'pg_playground',
});

module.exports = {
    sequelize,
    Sequelize
}