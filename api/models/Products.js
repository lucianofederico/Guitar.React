const S = require('sequelize');
const db = require('./db');

class Products extends S.Model {}

Products.init({
    nombre: {
        type: S.STRING,
        allowNull: false,
        validate:{
        isAlpha: true
        }
    },
    precio:{
        type: S.INTEGER,
        allowNull: false,
    },
    descripcion:{
        type: S.STRING,
        allowNull: false,
    },
    categoria:{
        type: S.STRING,
        allowNull: false,
    },
    marca:{
        type: S.STRING,
        allowNull: false,
    }, 
    imagen:{
      type: S.STRING,
      allowNull: false,
    },
    imagen2:{
        type: S.STRING,
        allowNull: false,
      },
    stock:{
        type: S.INTEGER,
        allowNull: false,
    },
}, { sequelize: db, modelName: 'products' });   


module.exports = Products;
    

      