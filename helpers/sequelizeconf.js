const Sequelize = require('sequelize')

class SequelizeConf {
    static getConnection() {
        return new Sequelize('travelDatabase', 'root', 'Ba66age', {
            host: '127.0.0.1',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            define: {
                timestamps: false
            }
        })
    }
}

module.exports = SequelizeConf