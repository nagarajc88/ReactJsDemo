import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUserData, isAuthenticated } from "../../services/AuthService";

const Header = () => { 
   const cartProducts = useSelector( state => state.cart );
   const navigate = useNavigate();
   function handleLogout(event){
     localStorage.removeItem("token");
     localStorage.removeItem("isLoggedIn");
     setUserData(true);
     navigate("/login");
   }
   return (<></>);
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
