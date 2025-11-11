import React from "react";
import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
  if (!items.length) return <p className="container mt-4">No hay productos para mostrar.</p>;
  return (
    <div className="container mt-4">
      <div className="row justify-content-center gx-4">
        <div className="col-12">
          <div className="d-flex flex-wrap justify-content-center" style={{ gap: "1rem", maxWidth: 1100, margin: "0 auto" }}>
            {items.map(item => (
              <div key={item.id} style={{ width: "100%", maxWidth: 340 }}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}