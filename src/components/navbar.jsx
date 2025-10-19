// src/components/NavBar.jsx
import React from "react";
import CartWidget from "./cartwidget";
import logo from "../assets/logo.png";


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="UruCel" style={{ height: 50 }} />
          <span className="ms-2">UruCel</span>
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#productos">Productos</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>

          <div className="d-flex align-items-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}