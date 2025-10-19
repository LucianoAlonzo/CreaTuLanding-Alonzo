import React from "react";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemlistcontainer";

export default function App() {
  const mensajeBienvenida = "Bienvenido! Explora nuestro catálogo y encuentra los mejores precios de celulares en todo el Uruguay.";
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={mensajeBienvenida} />
    </>
  );
}