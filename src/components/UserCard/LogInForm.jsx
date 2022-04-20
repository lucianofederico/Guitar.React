import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user";

export const LogInForm = () => {
  let [ email, setEmail ] = useState( "" ),
    [ password, setPassword ] = useState( "" ),
    [ send, setSend ] = useState( false ),
    [ loading, setLoading ] = useState( false )

    const dispatch = useDispatch();

  useEffect ( () => {
    
    if ( send ) {
      
      axios
      .post("http://localhost:3001/api/users/login", { email: email, password: password } )
      .then ( res => res.data )
      .then( datos => {

        setEmail( "" )
        setPassword( "" )
        dispatch( setUser( datos ) )
        console.log("Ha iniciado sesion: ", datos.email)
        
        setLoading( false )
      } )
    }

    setSend( false )
  
  }, [ send ] )

  const sendData = e => {
    e.preventDefault()
    setLoading(true)
    setSend( true )
  }

  const emailHandler = e => {
    e.preventDefault()
    setEmail( e.target.value )
  }
   
  const passwordHandler = e => {
    e.preventDefault()
    setPassword( e.target.value )
  }

  return (
      <form className="content" onSubmit={ sendData } >
        <div className="field">
          <input className="input is-primary" 
            onChange = { emailHandler } 
            value = { email } 
            type = "text"  
            placeholder="Email"  
            name = "email" />
        </div>
                  
        <div className="field">
          <input className="input is-primary" 
            onChange = { passwordHandler } 
            value = { password } 
            type = "password"  
            placeholder="Password"  
            name = "password" />
          
          <div className="buttons is-right">
            <button className="button is-primary is-inverted is-small px-0" type="button" >
              ¿Ha olvidado su contraseña?
            </button>
          </div>
        </div>
        
        <div className="buttons is-centered">
          { loading 
            ? <progress className="progress is-small is-primary" max="100">15%</progress>
            : <button className="buttonCompra" type="submit" name = "Iniciar sesion" >
                Iniciar sesion
              </button> }
        </div>

      </form> )
 }

 export default LogInForm