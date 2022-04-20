import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useLocation  } from "react-router-dom";

const AdminUserList = ()=>{
    const location = useLocation ();
    const [users,setUsers] = useState([]);
    const [abm,setAbm] = useState('');

    useEffect(()=>{
        setAbm(location.pathname.substring(location.pathname.lastIndexOf("/")+1,location.pathname.length));
        axios(`http://localhost:3001/api/admin/showUser`)
        .then((res) => res.data)
        .then((data)=> { return setUsers(data) })
    },[location])
    
    return (
    <div className="AdminListUser">
    <h3 class="title is-3">Listado de usuarios - {abm} </h3>
    <hr/>
                {users.map((user, i)=>{return ( <Link to={'/admin/user/'+ abm +'/'+ user.id }>
                        <div key={user.id}>
                            <a class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            {user.name +' ' + user.surname}
                            </a>
                        </div> </Link> ) })} 
    </div>
    )      
}

export default AdminUserList;