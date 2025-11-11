import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Urucel" style={{ height: 36 }} />
          <span className="ms-2 fw-bold">Urucel</span>
        </Link>

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
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/smartphones">Smartphones</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/accesorios">Accesorios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/ofertas">Ofertas</NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}