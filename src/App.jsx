import React from "react";
import { Routes, Route} from "react-router";
import { useDispatch,useSelector } from "react-redux";
import { initCart } from "./store/carrito";
import { Navigate } from "react-router";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Details from "./commons/Details"
import Cart from "./components/Cart";
import SingIn from "./components/SingIn";
import Search from "./components/Search";
import FormCar from "./components/FormCar";
import { setInitCart } from "./store/carrito";
import SlideShow from "./components/SlideShow";
import EnCamino from "./components/EnCamino";
import AdminUserModificar from "./components/Admin/AdminUserModificar";
import AdminUserList from "./components/Admin/AdminUserList";
import AdminUserBorrar from "./components/Admin/AdminUserBorrar";
import Grilla from "./components/Gtilla";

const App = () => {

  const dispatch = useDispatch()
  dispatch( initCart( { userId: 1 } ) )

  const isLoged = useSelector( state => state.user )
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />   
        <Route path="/register" element={<SingIn />} />
        <Route path="/guitar/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/form_address" element={<FormCar />} />

        <Route path="/products/:marca" element={<Grilla />}/>
        <Route path="/products/:marca/:categoria" element={<Grilla />}/>
        <Route path="/products/:marca/:categoria/:serie" element={<Grilla />}/>

        <Route path="/encamino" element={<EnCamino />} />
        {isLoged ? 
        isLoged.admin ?
        <>
          <Route path="/admin/user/delete" element={<AdminUserList />}/>
          <Route path="/admin/user/delete/:userId" element={<AdminUserBorrar/>}/>
          <Route path="/admin/user/modify" element={<AdminUserList />}/>
          <Route path="/admin/user/modify/:userId" element={<AdminUserModificar />}/>
          </>
        : null:null}
        {/* <Route path="*" element={<Navigate to = "/"/>} /> */}

      </Routes>
      
      <Footer />
    </div>
  );  
};

export default App
