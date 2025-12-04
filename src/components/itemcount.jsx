import React from "react";

export default function ItemCount({ stock = 1, initial = 1, onAdd }) {
  const [count, setCount] = React.useState(initial);

  function inc() { setCount(c => Math.min(stock, c + 1)); }
  function dec() { setCount(c => Math.max(1, c - 1)); }

  return (
    <div className="d-flex align-items-center gap-2">
      <button className="btn btn-outline-secondary" onClick={dec} aria-label="Disminuir">-</button>
      <input className="form-control text-center" value={count} readOnly style={{ width: 60 }} />
      <button className="btn btn-outline-secondary" onClick={inc} aria-label="Aumentar">+</button>
      <button className="btn btn-success" onClick={() => onAdd(count)} disabled={stock === 0}>
        Agregar
      </button>
    </div>
  );
}