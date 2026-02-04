import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { Pressable } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import ColorContext from "../../context/colorContext";

const initialNotes = [
  {
    id: 1,
    name: "Buy Groceries",
    date: "12 June, 2025",
    time: "10:00AM",
    description: "Description will be written and shown here",
    completed: false,
  },
  {
    id: 2,
    name: "Sam",
    date: "12 June, 2025",
    time: "10:00AM",
    description: "Description will be written and shown here",
    completed: false,
  },
  {
    id: 3,
    name: "Sam",
    date: "12 June, 2025",
    time: "10:00AM",
    description: "Description will be written and shown here",
    completed: false,
  },
  {
    id: 4,
    name: "Sam",
    date: "12 June, 2025",
    time: "10:00AM",
    description: "Description will be written and shown here",
    completed: false,
  },
];

export default function Today() {
  const { theme } = useContext(ColorContext);
  const [notes, setNotes] = useState(initialNotes);

  const toggleStatus = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note,
      ),
    );
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const renderRightActions = (id) => {
    return (
      <Pressable onPress={() => deleteNote(id)} style={styles.deleteBox}>
        <FontAwesome5 name="trash" size={18} color="#000" />
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.todayBox}>
      <Text style={[styles.todayText, { color: theme.primaryText }]}>
        Today Notes
      </Text>

      {notes.map((item) => {
        const completed = item.completed;

        return (
          <Swipeable
            key={item.id}
            renderRightActions={() => renderRightActions(item.id)}
          >
            <Pressable
              style={[
                styles.innerContainer,
                completed && styles.completedCard,
                {
                  backgroundColor: theme.background,
                  borderWidth: 1,
                  borderColor: theme.border,
                },
              ]}
              onPress={() => toggleStatus(item.id)}
              android_ripple={{ color: "#eee" }}
            >
              <View style={styles.innerRow}>
                <Text style={[styles.title, { color: theme.primaryText }]}>
                  {item.name}
                </Text>

                <View
                  style={[
                    styles.statusBox,
                    { backgroundColor: completed ? theme.success : "#6FA9B8" },
                  ]}
                >
                  <FontAwesome5
                    name={completed ? "check" : "clock"}
                    size={14}
                    color="#fff"
                  />
                  <Text style={styles.status}>
                    {completed ? "Completed" : "Pending"}
                  </Text>
                </View>
              </View>
              <Text
                style={[styles.description, { color: theme.secondaryText }]}
              >
                {item.description}
              </Text>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.date, { color: theme.primaryText }]}>
                  {item.date}
                </Text>
                <Text style={[styles.time, { color: theme.secondaryText }]}>
                  {item.time}
                </Text>
              </View>
            </Pressable>
          </Swipeable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  todayBox: {
    width: "95%",
    padding: 10,
    borderRadius: 15,
    marginLeft: 10,
  },
  todayText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 10,
  },
  innerContainer: {
    backgroundColor: "#1A1A23",
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  completedCard: {
    opacity: 0.6,
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  },
  description: {
    fontSize: 15,
    marginVertical: 4,
    color: "#eee",
  },
  date: {
    fontSize: 14,
    fontWeight: "500",
    color: "#DCDCDC",
  },
  time: {
    color: "#DCDCDC",
  },
  statusBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    borderRadius: 10,
    gap: 4,
  },
  status: {
    fontSize: 14,
    color: "#fff",
  },
  deleteBox: {
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    borderRadius: 20,
    marginBottom: 10,
  },
  deleteText: {
    fontSize: 12,
    marginTop: 4,
  },
});
