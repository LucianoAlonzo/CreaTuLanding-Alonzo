import React from "react";
import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
  if (!items.length) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning" role="alert">
          No se encontraron productos para esta categoría. Probá otra categoría
          o volvé al inicio.
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center gx-4">
        <div className="col-12">
          <div
            className="d-flex flex-wrap justify-content-center"
            style={{ gap: "1rem", maxWidth: 1100, margin: "0 auto" }}
          >
            {items.map((item) => {
              // Log para verificar el ID de cada producto
              console.log("ItemList -> item.id:", item.id);

              if (!item.id) {
                return (
                  <div
                    key={Math.random()}
                    className="alert alert-danger"
                    style={{ width: "100%", maxWidth: 340 }}
                  >
                    Producto sin ID válido
                  </div>
                );
              }

              return (
                <div key={item.id} style={{ width: "100%", maxWidth: 340 }}>
                  <ItemCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}