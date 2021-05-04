import React from 'react'
import {Link} from "react-router-dom"
const NavBar = () => {
    return (
        <nav classname="navbar navbar-expand-lg navbar-light bg-light">
        <div classname="container-fluid">
          <a classname="navbar-brand" href="#">Logo</a>
          <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span classname="navbar-toggler-icon"></span>
          </button>
          <div classnameName="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div classnameName="navbar-nav">
            <Link className="nav-link" to="/">Dashboard</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
            <Link className="nav-link" to="/about">About</Link>
             
            </div>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;