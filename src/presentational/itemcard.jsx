import React from "react";
import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text text-muted">{item.category}</p>
        <p className="card-text">{item.description}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">${item.price}</span>
          <Link to={`/item/${item.id}`} className="btn btn-primary">Ver detalle</Link>
        </div>
      </div>
    </div>
  );
}