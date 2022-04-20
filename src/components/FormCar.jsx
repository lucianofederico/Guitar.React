import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EnCamino from "./EnCamino";

const FormCar = ({total}) => {
  let [name, setName] = useState(""),
    [surname, setSurname] = useState(""),
    [address, setAddress] = useState(""),
    [phone, setPhone] = useState(""),
    [send, setSend] = useState(false),
    [isSell, setIsSell] = useState(false),
    [orden, setOrden] = useState(null),
    [formapago, setFormapago] = useState("")
  let fecha = new Date();
  let ordenDeCompra = Math.floor((Math.random() * (10000 - 1 + 1)));

  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (user) {
      setName(user.name);
      setSurname(user.surname);
      setAddress(user.direction);
      setPhone(user.phoneNumber);
    }
    if (send) {
      console.log({
        name: name,
        surname: surname,
        address: address,
        phone: phone,
      });
      setName("");
      setSurname("");
      setAddress("");
      setPhone("");
    }
    setSend(false);
  }, [user, send]);

  const onClickHandler = () => {
    
    axios.post(`http://localhost:3001/api/orden/createorders/${user.id}`, 
    {formaDePago: "efectivo", totalDeCompra: total, fecha: fecha, ordenDeCompra: ordenDeCompra, userId: user.id })
    .then((res) => res.data)
    .then((data) => {
        setOrden(data);
        setIsSell(!isSell)
    });
}

  const changeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const changeSurname = (e) => {
    e.preventDefault();
    setSurname(e.target.value);
  };

  const changeAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const changePhone = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  const sendForm = (e) => {
    e.preventDefault();
    setSend(true);
  };

  return (
    <>
      <h2 className="title is-2">Datos de envio</h2>

      <p className="content">Ingrese aqui los datos de envio</p>

      <form onSubmit={sendForm}>
        <div className="field">
          <input
            className="input is-primary"
            onChange={changeName}
            value={name}
            type="text"
            placeholder="Nombre"
            name="Nombre"
          />
        </div>

        <div className="field">
          <input
            className="input is-primary"
            onChange={changeSurname}
            value={surname}
            type="text"
            placeholder="Apellido"
            name="Apellido"
          />
        </div>

        <div className="field">
          <input
            className="input is-primary"
            onChange={changeAddress}
            value={address}
            type="text"
            placeholder="Direccion"
            name="Direccion"
          />
        </div>

        <div className="field">
          <input
            className="input is-black-ter"
            onChange={changePhone}
            value={phone}
            type="text"
            placeholder="Telefono"
            name="Telefono"
          />
        </div>
      </form>
      <div className="finalizarCompra">
        <div>
          <button className="buttonCompra" onClick={onClickHandler}> Finalizar Compra </button>
        </div>
      </div>
      {isSell && <EnCamino />}
    </>
  );
};
export default FormCar;
