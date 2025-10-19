import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function CartWidget() {
  const cantidad = 0;
  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={20} className="me-2" />
      <span className="badge bg-primary">{cantidad}</span>
    </div>
  );
}