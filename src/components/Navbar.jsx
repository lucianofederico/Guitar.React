import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../essets/search.svg";
import { ReactComponent as CartIcon } from "../essets/cart.svg";
import { ReactComponent as Logo } from "../essets/logos/goldLogo.svg";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import LogInCard from "./UserCard/LogInCard";
import LogedCard from "./UserCard/LogedCard";
import { useSelector } from "react-redux";
import MenuMarcas from "./MenuMarcas"
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";


const Navbar = () => {
  let [isSerching, setIsSerching] = useState(false);
  let [logInClick, setLogInClick] = useState(false);

  const isLoged = useSelector( state => state.user )

  const dispatch = useDispatch();

  window.addEventListener('click', e => {
    let buttonLog = document.getElementById('clickLog')
    let tarjeta = document.getElementById('clickCard')
    if ( (buttonLog && !buttonLog.contains(e.target)) && (tarjeta && !tarjeta.contains(e.target)) ) {
      setLogInClick(false)
    }
  })

  useEffect(()=> 
  {axios
    .get("http://localhost:3001/api/users/me")
    .then(res=> res.data)
    .then (datos=>{
      dispatch (setUser (datos))
    })},
   [])
  
  return (
    <>
      <nav className="navbar has-background-black-ter has-text-white sticky">
        <div className="navbar-brand">
          <Link to="/">
            <div className="navbar-item navtext">
              <p><strong className="has-text-white is-size-5">GUITAR <Logo /> REACT</strong></p>
            </div>
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">

          <MenuMarcas />
          <div className="navbar-end">
            <div className="navbar-item">
                {isSerching && <SearchBar />}
              <div className="buttons">
                
                <button
                  className="button has-background-warning-dark has-text-white"
                  onClick={() => setIsSerching(!isSerching)}
                >
                  <SearchIcon />
                </button>
                <br />
                <br />
                <br />
                <br />

                <button id="clickLog" className="button has-background-warning-dark" 
                  onClick={() => setLogInClick(!logInClick)}>
                    <p className="has-text-white">{!isLoged?"Login":"Logout"}</p>
                </button>
                <Link to={"/cart"}>
                <button className="button has-background-warning-dark">
                  
                    <strong className="has-text-white">
                      <CartIcon />
                    </strong>
                  
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      

        { logInClick && ( isLoged ? <LogedCard /> : <LogInCard /> ) }
      
    </>
  );
};

export default Navbar;
