import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  texto: string;
  setTexto: (t: string) => void;
  agregarProducto: () => void;
};

export function FormularioItem({ texto, setTexto, agregarProducto }: Props) {
  return (
    <View style={styles.filaInput}>
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Agregar producto (ej: Leche)"
        style={styles.input}
        returnKeyType="done"
        onSubmitEditing={agregarProducto}
      />

      <Pressable style={styles.botonAgregar} onPress={agregarProducto}>
        <Text style={styles.textoBoton}>Agregar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  filaInput: { flexDirection: "row", gap: 8 },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },

  botonAgregar: {
    backgroundColor: "#1e90ff",
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  textoBoton: {
    color: "#fff",
    fontWeight: "600",
  },
});
