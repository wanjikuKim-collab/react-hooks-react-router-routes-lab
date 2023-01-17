import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "flex",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",

  }

  return(
    <div className="navbar">
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "blue,"}}>Home</NavLink>
      <NavLink to="/movies" exact style={linkStyles} activeStyle={{background: "blue,"}}>Movies</NavLink>
      <NavLink to="/directors" exact style={linkStyles} activeStyle={{background: "blue,"}}>Directors</NavLink>
      <NavLink to="/actors" exact style={linkStyles} activeStyle={{background: "blue,"}}>Actors</NavLink>
    </div>
  )
    
}

export default NavBar;
