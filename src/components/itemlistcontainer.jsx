import React from "react";

export default function ItemListContainer({ mensaje }) {
  return (
    <main className="container mt-4">
      <h2>Bienvenido a MiTienda</h2>
      <p>{mensaje}</p>
    </main>
  );
}