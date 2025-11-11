const mockProducts = [
  { id: "1", title: "Samsung Galaxy S22", category: "smartphones", price: 699, description: "Pantalla 6.1\", Exynos/Snapdragon, 128GB, cámara triple." },
  { id: "2", title: "Apple iPhone 13", category: "smartphones", price: 799, description: "A15 Bionic, 128GB, pantalla Super Retina XDR." },
  { id: "3", title: "Xiaomi Redmi Note 11", category: "smartphones", price: 249, description: "Pantalla AMOLED 90Hz, 128GB, excelente relación precio/velocidad." },
  { id: "4", title: "Sony WF-1000XM4", category: "accesorios", price: 279, description: "Auriculares true wireless con cancelación de ruido líder en su categoría." },
  { id: "5", title: "Anker Charger 30W USB-C", category: "accesorios", price: 29, description: "Cargador rápido USB-C 30W, compacto y seguro." },
  { id: "6", title: "Protector de pantalla templado Urucel", category: "accesorios", price: 12, description: "Cristal templado 9H, compatible con varios modelos." }
];

export function fetchAllProducts() {
  return new Promise((res) => setTimeout(() => res(mockProducts), 500));
}

export function fetchProductsByCategory(categoryId) {
  return new Promise((res) =>
    setTimeout(() => res(mockProducts.filter(p => p.category === categoryId)), 500)
  );
}

export function fetchProductById(id) {
  return new Promise((res, rej) =>
    setTimeout(() => {
      const p = mockProducts.find(x => x.id === id);
      p ? res(p) : rej(new Error("Producto no encontrado"));
    }, 500)
  );
}