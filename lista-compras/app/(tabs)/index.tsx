import { StyleSheet, Text, View } from "react-native";
import { FormularioItem } from "./componentes/FormularioItem";
import { ListaDeCompras } from "./componentes/ListaDeCompra";
import { useProductos } from "./componentes/hooks/useItems";

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
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>🛒 Lista de Compras</Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: "#fff",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
  },
});
