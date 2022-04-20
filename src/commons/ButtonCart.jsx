import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { ReactComponent as TrashIcon } from "../essets/trash.svg";
import { addCart, postCart, removeCart, setCart, setNumber, updateCart } from "../store/carrito";

const ButtonCart = ({ productId }) => {
    const isInCart = useSelector( state => state.cart ).find(element => element.productId === productId )

    const [cantidad, setCantidad] = useState( isInCart ? isInCart.cantidad : 1 )

    const dispatch = useDispatch();

    const cartHandler = (borrar) =>{
      if (!borrar) {
        isInCart
        ? dispatch( updateCart( {productId: productId, cantidad: cantidad, userId: 1 } ) )
        : dispatch( addCart( {productId: productId, cantidad: cantidad, userId: 1 } ) )
      }
      else {
        dispatch( removeCart( {productId: productId, userId: 1 }))
      }
    }

    const changeHandler = e =>{
      e.preventDefault()
      setCantidad( parseInt(e.target.value, 10) )
    }
    // { isInCart ? isInCart.cantidad : cantidad } 
  return (
    <>
    <div className="carritoStyle">
      <input className = "input is-primary chico"
        type = "number" 
        min = {1} max = {8} 
        value = { cantidad } 

        onChange = {changeHandler}  />

      <button className="buttonCompra" onClick={ () => cartHandler(false) }>Cambiar carrito </button>
      
      <button className="tooltip" onClick={ () => cartHandler(true)} >
        <TrashIcon />
        <span className="tooltiptext">Eliminar</span>
      </button>
      </div>
     {/* // <button className="buttonCompra" onClick={ cartHandler }>Cambiar carrito </button> // ESTO NOS PEDIA QUE SAQUEMOS POR LAS DUDAS LE METIMOS UN COMENTARIO XD */}

    </>
    
  );
};

export default ButtonCart;