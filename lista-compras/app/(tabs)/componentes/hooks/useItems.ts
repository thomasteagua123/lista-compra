import { useState } from "react";
import { Producto } from "../tipos/item";

export function useProductos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [texto, setTexto] = useState("");

  const agregarProducto = () => {
    const textoLimpio = texto.trim();
    if (!textoLimpio) return;

    setProductos((previos) => [
      ...previos,
      {
        id: String(Date.now()),
        nombre: textoLimpio,
        completado: false,
      },
    ]);

    setTexto("");
  };

  const alternarProducto = (id: string) => {
    setProductos((previos) =>
      previos.map((producto) =>
        producto.id === id
          ? { ...producto, completado: !producto.completado }
          : producto,
      ),
    );
  };

  const eliminarProducto = (id: string) => {
    setProductos((previos) => previos.filter((producto) => producto.id !== id));
  };

  return {
    productos,
    texto,
    setTexto,
    agregarProducto,
    alternarProducto,
    eliminarProducto,
  };
}
