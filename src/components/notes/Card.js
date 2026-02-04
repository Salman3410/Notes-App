import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import dayjs from "dayjs";
import { useContext } from "react";
import ColorContext from "../../context/colorContext";

export default function Card({
  id,
  title,
  description,
  dateTime,
  onDelete,
  image,
}) {
  const { theme } = useContext(ColorContext);
  const formattedDate = dayjs(dateTime).format("DD MMM YYYY");
  const formattedTime = dayjs(dateTime).format("hh:mm A");
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.innerContainer,
          {
            backgroundColor: theme.card,
            borderWidth: 1,
            borderColor: theme.border,
          },
        ]}
      >
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.primaryText }]}>
            {title}
          </Text>

          <Pressable onPress={() => onDelete(id)}>
            <Feather name="trash-2" size={18} color="#E63946" />
          </Pressable>
        </View>

        {image && <Image source={{ uri: image }} style={styles.image} />}

        <Text style={[styles.description, { color: theme.secondaryText }]}>
          {description}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.date, { color: theme.primaryText }]}>
            {formattedDate}
          </Text>
          <Text style={[styles.time, { color: theme.secondaryText }]}>
            {formattedTime}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    elevation: 3,
    width: "90%",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  description: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontWeight: "500",
  },
  time: {
    fontSize: 16,
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginVertical: 8,
  },
});
