const Sequelize = require('sequelize');
const connect = require('../helpers/sequelizeconf').getConnection()

const Travel = connect.define('travels', {
    id: {
        type: Sequelize.INTEGER(11),
        unique: true,
        primaryKey: true
    },
    travel: {
        type: Sequelize.STRING(45)
    },
    description: {
        type: Sequelize.STRING(45)
    },
    active: {
        type: Sequelize.TINYINT(4)
    },
    price: {
        type: Sequelize.STRING(45)
    },
    type: {
        type: Sequelize.STRING(45)
    },
    url: {
        type: Sequelize.STRING(45)
    }
})

module.exports = Travel