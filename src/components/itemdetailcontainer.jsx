import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/mockfetch";
import ItemDetail from "../presentational/ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setItem(null);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    fetchProductById(id)
      .then(res => setItem(res))
      .catch(() => {
        setItem(null);
        setError("not-found");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (!id) return null;
  if (loading) return <p className="container mt-4">Cargando detalle...</p>;
  if (error === "not-found") return <p className="container mt-4">Producto no encontrado</p>;
  if (!item) return null;

  return <ItemDetail item={item} />;
}