import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const MenuMarcas = () => {
  
  const isLoged = useSelector( state => state.user )
  
  return (
    <div className="navbar-start">
      <div className="navbar-item has-dropdown is-hoverable">
        <div className="navbar-link has-background-black-ter">
         <Link to={"/products/Gibson"}><p className="has-text-white"> <strong className="has-text-white" >Gibson </strong> ®-Guitars</p></Link>
        </div>
        <div className="navbar-dropdown">
          <div className="nested dropdown">
            <div className="navbar-item">
              <span className="icon-text">
                <Link to={"/products/Gibson/electrica"} className="icon-text">
                  <span >Electrics</span>
                </Link>
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
              <Link to={"/products/Gibson/electrica/les%20paul"}><a className="dropdown-item">Les Paul</a></Link>
              <Link to={"/products/Gibson/electrica/sg"}><a className="dropdown-item">SG</a></Link>
              <Link to={"/products/Gibson/electrica/es"}><a className="dropdown-item">ES</a></Link>
              </div>
            </div>
          </div>
          <div className="nested dropdown">
            <div className="navbar-item">
              <span className="icon-text ">
                <Link to={"/products/Gibson/acustica"} className="icon-text">
                  <span>Acoustics</span>
                </Link>
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
              <Link to={"/products/Gibson/acoustica/original%20collections"}><a className="dropdown-item">Original Collection</a></Link>
              <Link to={"/products/Gibson/acoustica/artist%20collections"}><a className="dropdown-item">Artist Collection</a></Link>
              </div>
            </div>
          </div>
          <hr className="navbar-divider"></hr>
          <a href="https://www.gibson.com/en-US/" className="navbar-item">
            Gibson.com
          </a>
        </div>
      </div>

      <div className="navbar-item has-dropdown is-hoverable">
        <div className="navbar-link has-background-black-ter">
          <Link to={"/products/Fender"}><p className="has-text-white"> <strong className="has-text-white" >Fender </strong> ®-Guitars</p></Link>
        </div>
        <div className="navbar-dropdown">
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text">
                <Link to={"/products/Fender/electrica"} className="icon-text">
                  <span>Electrics</span>
                </Link>
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </a>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
              <Link to={"/fender/electrics/stratocaster"}><a className="dropdown-item">Stratocaster</a></Link>
              <Link to={"/fender/electrics/telecaster"}><a className="dropdown-item">Telecaster</a></Link>
              <Link to={"/fender/electrics/jazzmaster"}><a className="dropdown-item">Jazzmaster</a></Link>
              </div>
            </div>
          </div>
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text ">
                <Link to={"/products/Fender/acustica"} className="icon-text">
                  <span>Acoustics</span>
                </Link>
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </a>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
              <Link to={"/fender/acoustics/paramount"}><a className="dropdown-item">Paramount</a></Link>
              <Link to={"/fender/acoustics/classicdesign"}><a className="dropdown-item">Classic Design</a></Link>
              </div>
            </div>
          </div>
          <hr className="navbar-divider"></hr>
          <a href="https://www.fender.com/en-US/start" className="navbar-item">
            Fender.com
          </a>
        </div>
      </div>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link has-background-black-ter">
       <Link to={"/products/Epiphone"}><p className="has-text-white"> <strong className="has-text-white" >Epiphone </strong> ®-Guitars</p></Link>
        </a>
        <div className="navbar-dropdown">
          <div className="nested dropdown">
            <a className="navbar-item ">
              <span className="icon-text">
                <Link to={"/products/Epiphone/electrica"} className="icon-text">
                  <span>Electrics</span>
                </Link>
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </a>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
              <Link to={"/gretsch/electrics/hollowbody"}><a className="dropdown-item">Hollow Body</a></Link>
              </div>
            </div>
          </div>
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text ">
                <Link to={"/products/Epiphone/acustica"} className="icon-text">
                  <span>Acoustics</span>
                </Link>
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </a>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
              <Link to={"/gretsch/acoustics/rancher"}><a className="dropdown-item">Rancher</a></Link>
              </div>
            </div>
          </div>
          <hr className="navbar-divider"></hr>
          <a href="https://www.gretschguitars.com/" className="navbar-item">
            Epiphone.com
          </a>
        </div>
      </div>
     
      { isLoged ? isLoged.admin ? 

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          <strong> Administrar </strong>
        </a>
        <div className="navbar-dropdown">
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text">
               
                  <span>Usuarios</span>
                
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </a>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <Link to={`/admin/user/delete`} className="dropdown-item">
                      Borrar
                </Link>
                <Link to={`/admin/user/modify`} className="dropdown-item">
                      Modificar
                </Link>
              </div>
            </div>

          </div>
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text ">
                <Link to={"/admin/product"} className="icon-text">
                  <span>Productos</span>
                </Link>
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </a>
            
          </div>
        </div>
      </div>:null : null}

    </div>
  );
};
export default MenuMarcas;
