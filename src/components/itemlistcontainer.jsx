import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts, getProductsByCategory } from "../services/firestoreService";
import ItemList from "../presentational/itemlist";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetcher = categoryId ? getProductsByCategory(categoryId) : getAllProducts();
    fetcher
      .then(res => setItems(res))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p className="container mt-4">Cargando productos...</p>;
  return <ItemList items={items} />;
}