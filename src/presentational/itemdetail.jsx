import React, { useState } from "react";

export default function ItemDetail({ item }) {
  const [cantidad, setCantidad] = useState(1);

  return (
    <div className="container mt-4">
      <h2>{item.title} <small className="text-muted">({item.category})</small></h2>
      <p>{item.description}</p>
      <p className="fw-bold">${item.price}</p>

      <div className="d-flex align-items-center gap-3">
        <div className="input-group" style={{ width: 140 }}>
          <button className="btn btn-outline-secondary" onClick={() => setCantidad(c => Math.max(1, c - 1))}>-</button>
          <input className="form-control text-center" value={cantidad} readOnly />
          <button className="btn btn-outline-secondary" onClick={() => setCantidad(c => c + 1)}>+</button>
        </div>

        <button className="btn btn-success">Agregar {cantidad} al carrito</button>
      </div>
    </div>
  );
}