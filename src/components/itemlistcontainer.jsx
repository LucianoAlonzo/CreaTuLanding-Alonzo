import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllProducts, fetchProductsByCategory } from "../services/mockfetch";
import ItemList from "../presentational/ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const promise = categoryId ? fetchProductsByCategory(categoryId) : fetchAllProducts();
    promise
      .then(res => setItems(res))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p className="container mt-4">Cargando productos...</p>;
  return <ItemList items={items} />;
}