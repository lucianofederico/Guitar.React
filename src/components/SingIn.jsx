import axios from "axios";
import { useEffect, useState } from "react";
import { setUser } from "../store/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Swal = require('sweetalert2');

export const SingIn = () => {
  let [name, setName] = useState(""),
    [surname, setSurname] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [sign, setSign] = useState(false),
    [phone, setPhone] = useState(""),
    [direction, setDirection] = useState("");

    const dispatch = useDispatch();
   const navigate = useNavigate();


  useEffect(() => {
    if (sign) {
      axios
        .post("http://localhost:3001/api/users/register", {
          name: name,
          surname: surname,
          email: email,
          password: password,
          phoneNumber: phone,
          direction: direction,
        })
        .then((res) => res.data)
        .then((datos) => {
          console.log("Estas registrado", datos);

          axios
            .post("http://localhost:3001/api/users/login", {
              email: email,
              password: password,
            })
            .then((res) => res.data)
            .then((datos) => {
              dispatch(setUser(datos));
              Swal.fire({
                title: 'Bienvenido ' + datos.name + ' ' + datos.surname,
                text:'Gracias por Registrarse ',
                showConfirmButton: false,
                timer: 5500,
                width: 550,
                padding: '2em',
                color: '#bfa054',
                background: '#fff',
                backdrop: `
                  rgba(191,160,84,0.5)
                  url("https://i.gifer.com/XfQC.gif")
                  top center
                  no-repeat
                `
              })
              setName("");
              setSurname("");
              setEmail("");
              setPassword("");
              setPhone("");
              setDirection("");
              
              navigate("/")
            });
        });
    }
    setSign(false);
  }, [sign]);

  const signSubmit = (e) => {
    e.preventDefault();
    setSign(true);
  };

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const surnameHandler = (e) => {
    e.preventDefault();
    setSurname(e.target.value);
  };

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const phoneHandler = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  const directionHandler = (e) => {
    e.preventDefault();
    setDirection(e.target.value);
  };

  return (
    <div className="container grow-content">
      <h2 className="title is-2">Registro</h2>

      <p className="content">Llene el siguente formulario para registrarse</p>

      <form onSubmit={signSubmit}>
        <div className="field">
          <input
            className="input is-primary"
            onChange={nameHandler}
            value={name}
            type="text"
            placeholder="Nombre"
            name="Nombre"
          />
        </div>

        <div className="field">
          <input
            className="input is-primary"
            onChange={surnameHandler}
            value={surname}
            type="text"
            placeholder="Apellido"
            name="Apellido"
          />
        </div>

        <div className="field">
          <input
            className="input is-primary"
            onChange={emailHandler}
            value={email}
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>

        <div className="field">
          <input
            className="input is-primary"
            onChange={passwordHandler}
            value={password}
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>

        <div className="field">
          <input
            className="input is-primary"
            onChange={phoneHandler}
            value={phone}
            type="text"
            placeholder="Telefono"
            name="phone"
          />
        </div>

        <div className="field">
          <input
            className="input is-primary"
            onChange={directionHandler}
            value={direction}
            type="text"
            placeholder="Direccion"
            name="direction"
          />
        </div>

        <div className="buttons is-right">
          <button className="buttonCompra" type="submit" name="Registrarse">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingIn;
