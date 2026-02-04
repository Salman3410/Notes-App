import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useContext } from "react";
import Header from "../components/home/Header";
import Card from "../components/notes/Card";
import NotesContext from "../context/notesContext";
import ColorContext from "../context/colorContext";

export default function NotesScreen() {
  const { theme } = useContext(ColorContext);
  const { notes, deleteNote } = useContext(NotesContext);
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <Header name="All Notes" />
      {notes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No notes yet</Text>
        </View>
      ) : (
        notes.map((note) => (
          <Card
            key={note.id}
            id={note.id}
            title={note.title}
            description={note.description}
            image={note.image}
            date={note.date}
            time={note.time}
            onDelete={deleteNote}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#999",
  },
});
