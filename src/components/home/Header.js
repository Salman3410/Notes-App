import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorContext from "../../context/colorContext";

export default function Header({ name }) {
  const { theme } = useContext(ColorContext);
  return (
    <View>
      <Text style={[styles.header, { color: theme.textPrimary }]}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 48,
    fontWeight: "600",
    paddingHorizontal: 10,
  },
});
