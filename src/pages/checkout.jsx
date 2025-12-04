import React, { useState } from "react";
import { useCart } from "../context/cartcontext";
import { createOrder } from "../services/firestoreService";

export default function Checkout() {
  const { items, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const subtotal = items.reduce((s, it) => s + it.price * it.quantity, 0);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!items.length) return;
    setLoading(true);
    const order = {
      buyer: form,
      items,
      total: subtotal
    };
    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error(err);
      alert("Error al generar la orden");
    } finally {
      setLoading(false);
    }
  }

  if (orderId) {
    return (
      <div className="container mt-4">
        <h3>Compra confirmada</h3>
        <p>Tu orden fue registrada con ID: <strong>{orderId}</strong></p>
        <a href="/" className="btn btn-primary">Volver al inicio</a>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input className="form-control" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
        </div>

        <div className="mb-3">
          <h5>Total a pagar: ${subtotal}</h5>
        </div>

        <button className="btn btn-success" type="submit" disabled={loading || !items.length}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
}