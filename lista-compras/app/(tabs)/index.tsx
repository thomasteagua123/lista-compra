import { FormularioItem } from "./componentes/FormularioItem";
import { ListaDeCompras } from "./componentes/ListaDeCompra";
import { useProductos } from "./componentes/hooks/useItems";
import Titulo from "./componentes/Titulo";
import Marco from "./componentes/Marco";

export default function PantallaPrincipal() {
  const {
    productos,
    texto,
    setTexto,
    agregarProducto,
    alternarProducto,
    eliminarProducto,
  } = useProductos();

  return (
    <Marco>
      <Titulo />
      <FormularioItem
        texto={texto}
        setTexto={setTexto}
        agregarProducto={agregarProducto}
      />

      <ListaDeCompras
        productos={productos}
        alternarProducto={alternarProducto}
        eliminarProducto={eliminarProducto}
      />
    </Marco>
  );
}
