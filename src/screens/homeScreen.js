import { ScrollView, StyleSheet, View } from "react-native";
import Total from "../components/home/Total";
import Today from "../components/home/Today";
import AddNotes from "../components/home/AddNotes";
import Header from "../components/home/Header";
import { useContext } from "react";
import ColorContext from "../context/colorContext";

export default function HomeScreen({ navigation }) {
  const { theme } = useContext(ColorContext);
  return (
    <View style={[{ flex: 1, backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header name="My Notes" />
        <Total />
        <Today />
      </ScrollView>
      <AddNotes onPress={() => navigation.navigate("AddNote")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    // backgroundColor: "#0F0F14",
  },
});
