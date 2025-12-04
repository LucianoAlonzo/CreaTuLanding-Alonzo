## Resumen
Entrega final de este proyecto, que es una tienda online desarrollada con **React + Vite** y **Firebase Firestore**.  
Incluye catálogo de productos, vista de detalle, carrito de compras con estado global y checkout que genera órdenes en Firestore.

## Funcionalidades
- Catálogo completo de productos desde Firestore (`/`)
- Catálogo filtrado por categoría (`/category/:categoryId`)
- Vista de detalle de producto (`/item/:id`)
- Carrito de compras con cantidad en tiempo real (`/cart`)
- Checkout que guarda la orden en Firestore (`/checkout`)
- Página 404 para rutas inexistentes (`*`)

## Tecnologías utilizadas
- React
- React Router DOM
- Firebase Firestore
- Bootstrap
- React Icons

## Instalación
1. Clonar el repositorio:
   git clone <https://github.com/LucianoAlonzo/CreaTuLanding-Alonzo>
   cd urucel

2. Instalar dependencias:
   npm install

3. Crear archivo `.env` en la raíz con las credenciales de Firebase:
   VITE_APIKEY=...
   VITE_AUTHDOMAIN=...
   VITE_PROJECTID=...
   VITE_STORAGEBUCKET=...
   VITE_MESSAGINGSENDERID=...
   VITE_APPID=...

4. Ejecutar la aplicación:
   npm run dev

## Notas
- El carrito se mantiene entre recargas gracias a persistencia en `localStorage`.
- Los datos de productos provienen de la colección `products` en Firestore.
- Las órdenes se guardan en la colección `orders`.

## Autor
Proyecto realizado por **Luciano Alonzo** — Curso React Coderhouse.