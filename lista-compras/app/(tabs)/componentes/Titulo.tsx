import { Text, StyleSheet } from "react-native";
const Titulo = () => {
  return <Text style={styles.titulo}>🛒 Lista de Compras</Text>;
};

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

export default Titulo;
