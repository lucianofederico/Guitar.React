import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { setUser } from "../../store/user"

export const LogedCard = () => {
  
  const navigate = useNavigate(),
      dispatch = useDispatch(),
      user = useSelector( state => state.user )

  let [ send, setSend ] = useState( false )

  useEffect(()=>{
    if (send) {
      axios
      .post("http://localhost:3001/api/users/logout")
      .then ( res => res.data )
      .then( datos => {
        dispatch( setUser( null ) )
        console.log("Se ha deslogueado", datos)
        navigate("/")
      } )
    }
    setSend( false )
  }, [send])

  return (
    <div id="clickCard" className = "card tarjeta">
      <div className = "card-content">
        <div className = "media">
          <div className = "media-left">
            <figure className = "image is-48x48">
              <img className = "is-rounded" src = "https://bulma.io/images/placeholders/96x96.png" alt = "Foto de perfil"/>
            </figure>
          </div>

          <div className = "media-content columns">
            <div className="column">
              <p className = "title is-4">{user.name} {user.surname}</p>
              <p className = "subtitle is-6">{user.email}</p>
            </div>
            
            <div className="column is-one-fifth p-0">
              <button className="button is-danger" onClick={()=>{ setSend( true )}}>
                X
              </button>
            </div>

          </div>

        </div>
      </div>

      <footer className="card-footer">
        <button className="card-footer-item button is-primary is-inverted is-normal">
          Perfil
        </button>
      </footer>

    </div> )
}

export default LogedCard