import React from "react"
import { Link } from "react-router-dom"

import { ReactComponent as GibsonIcon } from "../essets/gibson.svg";
import { ReactComponent as FenderIcon } from "../essets/fender.svg";
import { ReactComponent as EpiphoneIcon } from "../essets/epiphone.svg";

const Tiles = ( { producto } ) => {

  return ( 
    <td className = "mothertile">
      <Link to = {"/guitar/" + producto.id}>
        <div className="tile">
          <div className="tile2 columns">
              { producto.marca === "Gibson" 
                ? <GibsonIcon className = "gibson-icon column adelante"/> 
                : producto.marca === "Fender" 
                  ? <FenderIcon className = "fender-icon column adelante"/> 
                  : <EpiphoneIcon className = "epiphone-icon column adelante"/> }
                
              <img className = "guitarimg" src = {producto.imagen}/>
              
              <p className = "adelante tiletext" >U$S { producto.precio }</p>
              

          </div>
        </div>
      </Link>
    </td> )
 }

 export default Tiles