import { Link } from "react-router-dom";
import { useState } from "react";
import ItemCount from "../components/itemcount";
import { useCart } from "../context/cartcontext";

export default function ItemDetail({ item }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAdd(qty) {
    addItem({ id: item.id, title: item.title, price: item.price }, qty);
    setAdded(true);
  }

  return (
    <div className="container mt-4">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p className="fw-bold">${item.price}</p>

      {item.stock === 0 && (
        <div className="alert alert-danger">Producto sin stock</div>
      )}

      {!added && item.stock > 0 && (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      )}

      {added && (
        <div className="mt-3">
          <div className="alert alert-success">Producto agregado al carrito</div>
          {/* Usar Link en vez de <a href> */}
          <Link to="/cart" className="btn btn-primary">
            Ir al carrito
          </Link>
        </div>
      )}
    </div>
  );
}