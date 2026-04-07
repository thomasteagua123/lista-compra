import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Producto } from "./tipos/item";

type Props = {
  productos: Producto[];
  alternarProducto: (id: string) => void;
  eliminarProducto: (id: string) => void;
};

export function ListaDeCompras({
  productos,
  alternarProducto,
  eliminarProducto,
}: Props) {
  return (
    <FlatList
      data={productos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => alternarProducto(item.id)}
          onLongPress={() => eliminarProducto(item.id)}
          style={styles.fila}
        >
          <Text
            style={[styles.textoFila, item.completado && styles.completado]}
          >
            {item.nombre}
          </Text>

          <Text
            style={[
              styles.indicador,
              item.completado
                ? styles.indicadorCompleto
                : styles.indicadorPendiente,
            ]}
          >
            {item.completado ? "✔" : "•"}
          </Text>
        </Pressable>
      )}
      ListEmptyComponent={
        <Text style={styles.vacio}>Sin productos. ¡Agregá el primero! 😊</Text>
      }
      ItemSeparatorComponent={() => <View style={styles.separador} />}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },

  textoFila: { fontSize: 16 },

  completado: {
    textDecorationLine: "line-through",
    color: "#999",
  },

  indicador: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "700",
  },

  indicadorPendiente: {
    backgroundColor: "#eee",
    color: "#666",
  },

  indicadorCompleto: {
    backgroundColor: "#2ecc71",
    color: "#fff",
  },

  separador: {
    height: 1,
    backgroundColor: "#eee",
  },

  vacio: {
    textAlign: "center",
    color: "#777",
    marginTop: 24,
  },
});
