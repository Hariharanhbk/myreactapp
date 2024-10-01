import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Authentication from "./JS/Authentication";
const Header = () => {
const navigate= useNavigate();
const isLoggedIn = Authentication.isUserLoggedIn();
  const logout =()=>{
    Authentication.removeUser();
    navigate("/");
  }
  return (
    <header style={styles.header}>
      <h1>My Website</h1>
      {isLoggedIn &&  <nav style={styles.nav}>  
      <NavLink to="/home" style={({ isActive }) => ({ 
   color: isActive ? 'greenyellow' : 'black' })}>Home</NavLink>
        <Link to="/product" style={styles.navLink} >
          product
        </Link>
        <button onClick={logout} className="btn btn-sm btn-danger" >
          logout
        </button>
      </nav>}
     
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Header;
