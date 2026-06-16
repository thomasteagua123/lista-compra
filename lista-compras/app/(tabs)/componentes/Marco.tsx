import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
const Marco = ({ children }: { children: ReactNode }) => {
  return <View style={styles.contenedor}>{children}</View>;
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
export default Marco;
