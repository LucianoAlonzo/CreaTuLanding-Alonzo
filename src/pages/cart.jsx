import React from "react";
import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { items, clearCart } = useCart();

  if (!items.length) {
    return (
      <div className="container mt-4">
        <div className="alert alert-info">El carrito está vacío.</div>
        <Link to="/" className="btn btn-primary">Volver al catálogo</Link>
      </div>
    );
  }

  
  const subtotal = items.reduce((s, it) => s + it.price * it.quantity, 0);

  return (
    <div className="container mt-4">
      <h2>Carrito</h2>
      <ul className="list-group mb-3">
        {items.map(it => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={it.id}>
            <div>
              <strong>{it.title}</strong>
              <div className="text-muted">Cantidad: {it.quantity}</div>
            </div>
            <div>${it.price * it.quantity}</div>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Total: ${subtotal}</h4>
        <div>
          <button className="btn btn-outline-danger me-2" onClick={clearCart}>Vaciar carrito</button>
          <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
        </div>
      </div>
    </div>
  );
}
