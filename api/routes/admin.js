const express = require('express')
const routerAdmin = express.Router()
const {db, User, Product, CarritoItem, Order, OrderItem} = require("../models/index");
const passport = require('passport');

// ------------------------------------------------- usuarios -------------------------------------------------

routerAdmin.get("/showuser", (req,res) => {
        User.findAll()
        .then(users => {
            res.status(201).send(users)
        })
        .catch(err => console.log(err))
})

routerAdmin.get("/showuser/:id", (req,res) => {
    const {id} = req.params
    User.findOne({where: {id}})
    .then(users => {
        res.status(201).send(users)
    })
    .catch(err => console.log(err))
})


routerAdmin.delete('/deleteuser/:id', function (req, res) {
    const {id} = req.params
        User.destroy({
            where: {
              id: id
            }
          })
          .then((data) => res.sendStatus(202))
  })

  routerAdmin.post("/changeuser/", (req,res) => {
    const {admin} = req.body
    //const {id} = req.params
    User.update(req.body,
    { where:{
        admin : admin,
    }})
    .then((data) => res.sendStatus(200))
    .catch(err => console.log(err))
})

// ------------------------------------------------- productos -------------------------------------------------

routerAdmin.post("/addproduct", (req,res) => {
    const {nombre, precio,descripcion, categoria, marca, imagen, imagen2, stock} = req.body
        Product.create({
            nombre : nombre,
            precio: precio,
            descripcion: descripcion,
            categoria: categoria,
            marca: marca,
            imagen: imagen,
            imagen2: imagen2,
            stock: stock
        })
        .then(product => {
            res.status(201).send(product)
        })
})

routerAdmin.delete("/deleteproduct", (req,res) => {
    const {id} = req.body
        Product.destroy({
            where: {
                id: id
              }
            })
        .then((data) => res.sendStatus(202))
        .catch(res.sendStatus(204))
})

routerAdmin.post("/changeproduct", (req,res) => {
    const {nombre, precio,descripcion, categoria, marca, imagen, imagen2, stock} = req.body
        Product.update({
            nombre : nombre,
            precio: precio,
            descripcion: descripcion,
            categoria: categoria,
            marca: marca,
            imagen: imagen,
            imagen2: imagen2,
            stock: stock
        })
        .then(product => {
            res.status(201).send(product)
        })
})

// ------------------------------------------------- categorias -------------------------------------------------



module.exports = routerAdmin;