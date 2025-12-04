import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { getTotalCount } = useCart();
  const cantidad = getTotalCount();

  return (
    <Link to="/cart" className="d-flex align-items-center text-decoration-none">
      <FaShoppingCart size={20} className="me-2" />
      <span className="badge bg-primary">{cantidad}</span>
    </Link>
  );
}