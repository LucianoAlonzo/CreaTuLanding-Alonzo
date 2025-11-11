import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mt-4">
      <h2>Página no encontrada</h2>
      <p>La ruta solicitada no existe en Urucel.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  );
}