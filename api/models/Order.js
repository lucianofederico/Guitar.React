const S = require('sequelize');
const db = require('./db');

class Order extends S.Model {}

Order.init({
    fecha:{
        type:S.DATEONLY,
        allowNull: false
    },
    formaDePago:{
        type:S.STRING,
        allowNull: false
    },
    ordenDeCompra:{
        type:S.INTEGER,
        allowNull: false
    },
    totalDeCompra:{
        type:S.INTEGER,
        allowNull: false
    }
}, { sequelize: db, modelName: 'orders' });  

module.exports = Order;

