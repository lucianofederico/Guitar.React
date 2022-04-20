const express = require('express')
const routerUser = express.Router()
const {db, User, Product, CarritoItem, Order, OrderItem} = require("../models/index");
const passport = require('passport');


routerUser.post("/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
});

routerUser.post("/register", (req, res) => {
    const user = req.body
    User.create(user)
    .then((user)=> {
        res.status(201).send(user);
        /*Carrito.create({ userId: user.dataValues.id})
        .then((param) => {
            res.send(param)
        })*/
    })
});

routerUser.post("/logout", (req, res) => {
    req.logOut();
    res.sendStatus(200);
});

routerUser.get("/me", (req, res) => {
    if (!req.user) {
      return res.sendStatus(401);
    }
    res.send(req.user);
});

routerUser.post("/me", (req,res) => {
    const {name,surname,email,password,direction,phoneNumber} = req.body
    User.update(req.body,
    { where:{
        name : name,
        surname : surname,
        email : email,
        password: password,
        direction: direction,
        phoneNumber: phoneNumber
    }})
    .then((data) => res.sendStatus(200))
    .catch(err => console.log(err))
})

//vas al perfil del que esta logeado
routerUser.get("/:id", (req,res) => {
    const {id} = req.params
    User.findByPk({where: {id}})
    .then((user)=> {
        res.status(201).send(user);
    })
})

module.exports = routerUser;