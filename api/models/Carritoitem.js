const S = require('sequelize');
const db = require('./db');

class CarritoItem extends S.Model {}

CarritoItem.init({
  cantidad:{
    type: S.INTEGER,
  },
}, { sequelize: db, modelName: 'carritoItem' });  


module.exports = CarritoItem;