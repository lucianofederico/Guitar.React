import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const Swal = require('sweetalert2');

const AdminUserModificar = ()=>{
    const {userId} = useParams();
    const navegate = useNavigate();
    const [user,setUser] = useState();
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [email,setEmail] = useState('');
    const [telefono,setTelefono] = useState();
    const [direccion,setDireccion] = useState('');
    const [admin,setAdmin] = useState(false);
    const [chequeoCambio,setChequeoCambio] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:3001/api/admin/showuser/${userId}`)
        .then((res) => res.data)
        .then((data)=> {
            setNombre(data.name);
            setApellido(data.surname);
            setEmail(data.email);
            setTelefono(data.phoneNumber);
            setDireccion(data.direction);
            setAdmin(data.admin);
       return setUser(data)})
    },[])

    const handleModificar =()=>{
        if(chequeoCambio){
            console.log(user.admin)
            axios.post(`http://localhost:3001/api/admin/changeuser`, {user})
            .then((res) => {
                console.log(res.data)
                    Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se guardaron los cambios realizados ',
                showConfirmButton: false,
                timer: 1800
                })})
           }
        else{
            Swal.fire({
                title: 'No Hubo Cambios',
                text:'Volverá al menú de Modificación ',
                icon: 'info',
                showConfirmButton: false,
                timer: 1800
            })
        }
          navegate('/admin/user/modify')        
    }

    const handleChangeNombre =(event)=>{
        setNombre(event.target.value);
        setChequeoCambio(true);
    }

    const handleChangeApellido =(event)=>{
        setApellido(event.target.value);
        setChequeoCambio(true);
    }

    const handleChangeEmail =(event)=>{
        setEmail(event.target.value);
        setChequeoCambio(true);
    }

    const handleChangeTelefono =(event)=>{
        setTelefono(event.target.value);
        setChequeoCambio(true);
    }

    const handleChangeDireccion =(event)=>{
        setDireccion(event.target.value);
        setChequeoCambio(true);
    }

    const handleChangeAdmin =(event)=>{
        setAdmin(!admin);
        setUser({id: user.id,
            name: user.name,
            surname:  user.surname,
            email: user.email,
            password: user.password,
            admin: !user.admin,
            direction: user.direction,
            phoneNumber: user.phoneNumber
        })
        setChequeoCambio(true);
    }

    return  (<>
     <form className="userModificarAdmin" onSubmit={handleModificar}>
    <h3 class="title is-3">Detalle del usuario a Modificar</h3>
    <hr/>
        <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
                <input class="input" type="text" value={nombre} onChange={handleChangeNombre}/>
            </div>
        </div>
        <div class="field">
            <label class="label">Apellido</label>
            <div class="control">
                <input class="input" type="text" value={apellido} onChange={handleChangeApellido}/>
            </div>
        </div>

        <div class="field">
        <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" value={email} onChange={handleChangeEmail}/>
            </div>
        </div>

        <div class="field">
        <label class="label">Teléfono</label>
            <div class="control">
                <input class="input" type="number" value={telefono} onChange={handleChangeTelefono}/>
            </div>
        </div>

        <div class="field">
        <label class="label">Dirección</label>
            <div class="control">
                <input class="input" type="text" value={direccion} onChange={handleChangeDireccion}/>
            </div>
        </div>

        <label class="checkbox"> <input type="checkbox" checked={admin ? true:false} onChange={handleChangeAdmin}/>
            Privilegio Administrador
        </label>
        <div className="ButonesUserAdmin">
            <hr/>
            <button className="buttonCompra"> Guardar Cambios </button> 
        </div>
        </form>
    </>)
}

export default AdminUserModificar;