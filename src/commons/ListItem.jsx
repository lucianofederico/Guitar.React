import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { removeCarrito } from "../store/carrito";
import ButtonCart from "./ButtonCart";


const ListItem = ( { productId } ) =>{
  let [guitar, setGuitar] = useState("");



    useEffect(()=>{
        
        axios(`http://localhost:3001/api/product/select/${productId}`)
        .then((res) => res.data)
        .then((data)=> setGuitar(data) )
    },[])
  
  
  return (
    <div className="linea">
      <Link to={"/guitar/" + guitar.id}>
        <div className="list-item-cart ">
          <hr />
          <div>
            <img
              src={guitar.imagen}
              alt={guitar.nombre}
              height="100px"
              width="80px"
            />
          </div>
          <div className="letras">
            <p>
              {" "}
              <strong>{guitar.nombre} </strong>
            </p>
            <p>
              {" "}
              <strong>u$s {guitar.precio} </strong>
            </p>
            <p> {guitar.categorias} </p>
          
          </div>
        </div>
       
      </Link>
      <div className="carritoStyle">
      <ButtonCart productId= {productId}/>
            </div>
            
    </div>
  );
};

export default ListItem;


