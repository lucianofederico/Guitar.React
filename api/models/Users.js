const S = require('sequelize');
const db = require('./db');
const bcrypt = require('bcrypt')

class User extends S.Model {
  hash(password,salt) {
    return bcrypt.hash(password,salt);
  }
}

User.init({
  name: {
    type: S.STRING,
    allowNull: false,
    validate:{
      isAlpha: true
    }
  },
  surname:{
    type: S.STRING,
    allowNull: false,
    validate:{
      isAlpha: true
    }
  },
  email:{
    type: S.STRING,
    allowNull: false,
    unique:true,
    validate:{
      isEmail: true,
    },
  },
  password:{
    type: S.STRING,
    allowNull: false,
  },
  admin:{
    type: S.BOOLEAN,
    defaultValue: false
  },
  direction:{
    type: S.STRING,
  },
  phoneNumber:{
    type: S.STRING,
  },
  salt: {
      type: S.STRING
  }
}, { sequelize: db, modelName: 'users' });   

User.beforeCreate((user) => {
  return bcrypt
  .genSalt(16)
  .then((salt) => {
      user.salt = salt;
      return user.hash(user.password,user.salt);
  }).then((hash)=>{
      user.password=hash
  })
})

module.exports = User;