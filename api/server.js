const express = require('express');
const app = express();
const routes = require('./routes/index')
const cors = require("cors")
const passport = require("passport")
const localStrategy = require("passport-local").Strategy;
const sessions = require("express-session");
const {db, User, Product, CarritoItem, Order, OrderItem} = require("./models/index");
const morgan = require("morgan");
const volleyball = require('volleyball');

app.use(volleyball)
app.use(express.json())
app.use(cors())
app.use(morgan("tiny"));

app.use(sessions({ secret: "tmdb"}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); 
            }

            return done(null, user); 
          });
        })
        .catch(done); 
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});


app.use("/api", routes)

db.sync({ force: false }).then(() => {
    app.listen(3001, () => {
      console.log("Escuchando en puerto 3001");
    });
  });