import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import ColorContext from "../../context/colorContext";

export default function AddNotes({ onPress }) {
  const { theme } = useContext(ColorContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.btn, { backgroundColor: theme.accent }]}
        onPress={onPress}
      >
        <AntDesign name="plus" size={20} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 20,
    bottom: 10,
  },
  btn: {
    backgroundColor: "#4CC9F0",
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginTop: 50,
    elevation: 5,
  },
  icon: {
    color: "#fff",
  },
});
