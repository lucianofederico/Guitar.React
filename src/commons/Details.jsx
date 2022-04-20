import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCarrito } from "../store/carrito";
import ButtonCart from "./ButtonCart";


const Details = () =>{
  
  const { id } = useParams();
  const [guitar, setGuitar] = useState([]);
  const user = useSelector( state => state.user )
  //const [cartUser,setCartUser] = useState([]);

   useEffect(() => {
     axios.get(`http://localhost:3001/api/product/select/${id}`)
       .then((res) => res.data)
       .then((data) => {
         return setGuitar(data);
       });
   }, [id]);

  return (
    <>
      <div className="heard-details">
        <div>
          <img src={guitar.imagen} alt={guitar.nombre} />
        </div>

        <div>
          <div>
            <div className="description-product">
              <p class="title is-1 is">
                <strong>{guitar.nombre}</strong>
              </p>
              <p class="title is-2 is">
                <strong>u$s {guitar.precio}</strong>
              </p>
              <p>
                <strong> Cantidad disponible: </strong> {guitar.stock}
              </p>
              <p>
                <strong> Categoria: </strong>
                {guitar.categoria}
              </p>
              <p>
                <strong> Marca: </strong> {guitar.marca}{" "}
              </p>
              <p>
                <strong> Descripción: </strong> {guitar.descripcion}{" "}
              </p>
              <p>
                <strong>Valoración promedio: </strong>
              </p>
              <br />
              <ButtonCart productId={guitar.id} />
            </div>
          </div>


          <div className="opiniones">
          <p>
                <strong>Opiniones: </strong>
              </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam cupiditate excepturi vero voluptate ullam officiis alias totam tempore expedita accusantium ratione labore veniam eaque perferendis enim nam, magni iste.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam cupiditate excepturi vero voluptate ullam officiis alias totam tempore expedita accusantium ratione labore veniam eaque perferendis enim nam, magni iste.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam cupiditate excepturi vero voluptate ullam officiis alias totam tempore expedita accusantium ratione labore veniam eaque perferendis enim nam, magni iste.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam cupiditate excepturi vero voluptate ullam officiis alias totam tempore expedita accusantium ratione labore veniam eaque perferendis enim nam, magni iste.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam cupiditate excepturi vero voluptate ullam officiis alias totam tempore expedita accusantium ratione labore veniam eaque perferendis enim nam, magni iste.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam cupiditate excepturi vero voluptate ullam officiis alias totam tempore expedita accusantium ratione labore veniam eaque perferendis enim nam, magni iste.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam cupiditate excepturi vero voluptate ullam officiis alias totam tempore expedita accusantium ratione labore veniam eaque perferendis enim nam, magni iste.</p>
          </div>


        </div>
      </div>
      <article class="message">
        <div class="message-header">
          <p>Deja tu opinion</p>
        </div>
        <div class="message-body">
          <p>
            <strong>Usuario: {user?user.name:null}</strong>
          </p>
          <p>
            <strong>
              Calificación:{" "}
              <input
                className="input is-primary maschico"
                type="number"
                min="1"
                max="5"
              />
            </strong>
          </p>
          <p>
            <strong>
              Comentarios:{" "}
              <textarea
                class="textarea is-primary"
                placeholder="Primary textarea"
              ></textarea>
            </strong>
          </p>
        </div>
        <button className="buttonCompra"> Enviar</button>
      </article>
    </>
  );
};

export default Details;
