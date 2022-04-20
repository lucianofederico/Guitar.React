import { useNavigate, useParams } from "react-router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Swal = require('sweetalert2');

const AdminUserBorrar = ()=>{
    const navegate = useNavigate();
    const {userId} = useParams();
    const [user, setUser] = useState({});
    const isLoged = useSelector( state => state.user )
    
    useEffect(()=>{
        axios(`http://localhost:3001/api/admin/showuser/${userId}`)
        .then((res) => res.data)
        .then((data)=> {return setUser(data)})
    },[])
    
    const handleBorrar = (e) =>{
        e.preventDefault();
        console.log(isLoged)
        if(isLoged.id === parseInt(userId)){

            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'No es posible Borrar su MISMO USUARIO'
              })
              navegate('/admin/user/delete')
        }
        else {
        axios.delete(`http://localhost:3001/api/admin/deleteuser/${userId}`)
        .then((res)=>{ 
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se borro al usuario ',
            showConfirmButton: false,
            timer: 1500
            })  
          navegate('/admin/user/delete')
          
        }) 
        }  
    }

   return <>
    <form className="userModificarAdmin" onSubmit={handleBorrar}>
        <h3 class="title is-3">Detalle del usuario a Borrar</h3>
        <hr/>
            <div class="field">
                <label class="label">Nombre</label>
                <div class="control">
                    <input class="input" type="text" placeholder="..." value={user.name? user.name:""}/>
                </div>
            </div>
            <div class="field">
                <label class="label">Apellido</label>
                <div class="control">
                    <input class="input" type="text" placeholder="..." value={user.surname? user.surname:""}/>
                </div>
            </div>

            <div class="field">
            <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="@" value={user.email? user.email:""}/>
                </div>
            </div>

            <label class="checkbox"> <input type="checkbox" />
                Privilegio Administrador
            </label>
            <div className="ButonesUserAdmin">
                <hr/>
                <button className="buttonDelete"> Borrar usuario </button> 
            </div>
            </form>
        </>
}
export default AdminUserBorrar;