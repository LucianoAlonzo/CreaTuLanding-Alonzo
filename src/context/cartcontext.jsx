import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  //inicializo el carrito desde localstorage
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  //cada vez que cambie el carrito lo guardo en ls
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  function addItem(product, quantity = 1) {
    setItems(prev => {
      const idx = prev.findIndex(p => p.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + quantity };
        return copy;
      }
      return [...prev, { ...product, quantity }];
    });
  }

  function getTotalCount() {
    return items.reduce((sum, it) => sum + (it.quantity || 0), 0);
  }

  function clearCart() {
    setItems([]);
    localStorage.removeItem("cart"); //aprovecho a limpiar ls tambien
  }

  return (
    <CartContext.Provider value={{ items, addItem, getTotalCount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}