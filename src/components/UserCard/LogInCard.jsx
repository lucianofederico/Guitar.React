import React from "react"
import { Link } from "react-router-dom"
import LogInForm from "./LogInForm"

export const LogInCard = () => {

   return (
      <div id="clickCard" className="card tarjeta">
         <header className="card-header">
            <div className="card-header-title">
               <h4 className="title is-4">
                  Iniciar sesion
               </h4>
            </div>
         </header>

         <div className="card-content">
            <LogInForm />
         </div>

         <Link to={"/register"}>
            <footer className="card-footer">
               <button className="card-footer-item button is-primary is-inverted is-normal">
                  Registrarse
               </button>
            </footer>
         </Link>

      </div> )
}

export default LogInCard