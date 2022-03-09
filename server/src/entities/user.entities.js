

const { Sequelize } = require('sequelize');
class AutoIncrement {
    id = {
        primaryKey: true,
        type: Sequelize.INTEGER
    };
}
class User extends AutoIncrement {
    
    userName = { type: Sequelize.STRING(50) };
    password = { type: Sequelize.STRING(50) };
    lastName = { type: Sequelize.STRING(50) };
    firstName = { type: Sequelize.STRING(50) };
    email = { type: Sequelize.STRING(50) };
    birthDate = { type: Sequelize.STRING(50) };
    username = { type: Sequelize.DATE };
    password = { type: Sequelize.STRING(50) };
    
    firstLoginDate = {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    };
    lastLoginDate = {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    };;
    admin = { type: Sequelize.BIT };
    status = { type: Sequelize.BIT };
}
module.exports = { user }