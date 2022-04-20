import { useState, useEffect } from "react";
import ListItem from "../commons/ListItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FormCar from "./FormCar";
import EnCamino from "./EnCamino";
import axios from "axios";

const Cart = () =>{
    const [isLoading,setIsLoading] = useState([true])
    //const [guitars, setGuitars] = useState([]);
    //const user = useSelector( state => state.user )
    const [total, setTotal] = useState(0);
    const guitars = useSelector( state => state.cart )

       //const guitars = useSelector( state => state.cart )


       useEffect(()=>{
        
        setIsLoading(true);
        setIsLoading(false);

    },[])

    if(isLoading)
    return (
            <div className="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );

  return (
    <div className="cart grow-content">
      <div className="itemsContainer">
        <div className="formularioEnvio">
          
          {guitars.map((guitar, i)=>{
            return ( 
              <ListItem productId = {guitar.productId} key={i} /> ) })} 
          <hr/>
          <div className="totalCompra">
            <p> <strong> Total: u$s </strong> {total}</p>
          </div>
        </div>
        <div className="formularioEnvio">
          <FormCar total= {total} />
        </div>
      
      </div>
    </div>
  );
}

export default Cart;