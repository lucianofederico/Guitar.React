import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const EnCamino = () => {

  const user = useSelector( state => state.user )


  return (
    <div id="clickCard" className="card tarjetafindecompra">
    <div className="grow-content ">
      <article className="message is-dark">
        <div className="message-header">
          <p>Tu pedido ya esta en camino!</p>
        </div>
        <div className="message-body">
          <p>Datos de la compra</p>

          <p> Producto: </p>
          <p>Dirección: {user?user.direction:null}</p>
          <p>Teléfono: {user?user.phoneNumber:null}</p>
          <p>Te mandamos un mail con la confirmación de tu compra</p>
          <p> Muchas gracias por tu compra</p>
          <Link to={"/"} style={{textDecoration: "none"}}>
            <button className="buttonCompra">Seguir comprando</button>
          </Link>
        </div>
      </article>
    </div>
    </div>
  );
};

export default EnCamino;
