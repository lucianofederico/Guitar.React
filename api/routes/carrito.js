const express = require('express')
const routerCarrito = express.Router()
const {db, User, Product, CarritoItem, Order, OrderItem} = require("../models/index");



routerCarrito.get("/show/:userId", (req, res) => { 
    const { userId } = req.params
    CarritoItem
    .findAll({where: { userId: userId }})
    .then( items => {
        const cart = items.map( item => {
            const data = item.dataValues
            return {
                cantidad: data.cantidad, 
                userId: data.userId,
                productId: data.productId
                }
        } )
        res.send( cart )
    })
}) 

routerCarrito.post("/add", (req, res) => {
    let { userId, productId, cantidad } = req.body
    CarritoItem.create({ 
        userId: userId,
        productId: productId,
        cantidad: cantidad
    })
    .then( ( { dataValues } ) => 
        res.send( {
            userId: dataValues.userId,
            productId: dataValues.productId,
            cantidad: dataValues.cantidad
        } ) )
})

routerCarrito.delete("/delete/:userId/:productId", (req, res) => {
    const { userId, productId } = req.params
    CarritoItem
    .destroy({ where: { productId: productId, userId: userId } })
    .then( () =>
        res.send( { productId: productId } ) )
})

routerCarrito.put("/update/:userId/:productId", (req, res) => {
    let { cantidad, productId, userId } = req.body
    CarritoItem.update(
        {cantidad: cantidad}, 
        {where: { productId: productId, userId: userId } } )
    .then( () =>
        res.send( req.body ) )
})

/* routerCarrito.delete("/destroy/:id", (req, res) => {
    const {id} = req.params
    CarritoItem.destroy({ where: { userId: id } })
    .then(() => res.send(id))
}) */



module.exports = routerCarrito