"use strict";
const nodemailer = require("nodemailer");
const { applyMiddleware } = require("redux");
const {db, User, Product, CarritoItem, Order, OrderItem} = require("../models/index");


async function sendEmail(id, orden, arrayProducts) {
/*   console.log("ESTO ES ID------------------------>",id)
  console.log("ESTO ES ORDEN------------------------>",orden)
  console.log("ESTO ES PRDOCUTOS------------------------>", arr) */
  let user = await User.findOne({where: {id}, raw: true})

  console.log("este es el usuario", user)


  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "guitarreact@gmail.com",
      pass: "vlcqkkcvxvosxylm"
      }
  });

  let info = await transporter.sendMail({
    from: '"Guitar React" <guitarreact@gmail.com>',
    to: user.email , 
    subject: "Guitar React - Orden:" + orden.ordenDeCompra, 
    text: 'Hola ' + user.name + ',\n\n Tu orden de pedido fue realizada con éxito, a continuacion te brindaremos un detalle de la misma. mediante tu numero de "orden de compra" podras ver el seguimiento del pedido. Muchas gracias por comprar en Guitar React, que tenga rock en su vida ', 
    html: '<b>Hola ' + user.name + ',\n\n Tu orden de pedido fue realizada con éxito, a continuacion te brindaremos un detalle de la misma. mediante tu numero de "orden de compra" podras ver el seguimiento del pedido. Muchas gracias por comprar en Guitar React, que tenga rock en su vida</b>', 
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

//sendEmail().catch(console.error);

module.exports = sendEmail



