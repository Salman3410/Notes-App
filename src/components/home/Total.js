import { StyleSheet, Text, View } from "react-native";
import { Foundation, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useContext } from "react";
import ColorContext from "../../context/colorContext";

export default function Total() {
  const { theme } = useContext(ColorContext);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.totalBox, { backgroundColor: theme.card }]}>
          <Foundation
            name="clipboard-notes"
            size={32}
            style={styles.totalIcon}
          />
          <View>
            <Text style={[styles.totalText, { color: theme.primaryText }]}>
              Total Notes
            </Text>
            <Text style={[styles.amount, { color: theme.primaryText }]}>
              03
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.totalBox,
            {
              backgroundColor: theme.card,
            },
          ]}
        >
          <FontAwesome5
            name="calendar-check"
            size={32}
            style={styles.todayIcon}
          />
          <View>
            <Text style={[styles.totalText, { color: theme.primaryText }]}>
              Today's Notes
            </Text>
            <Text style={[styles.amount, { color: theme.primaryText }]}>
              03
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.completedBox, { backgroundColor: theme.card }]}>
        <FontAwesome
          name="check-circle"
          size={32}
          style={styles.completedIcon}
        />
        <View>
          <Text style={[styles.completedText, { color: theme.primaryText }]}>
            Completed Notes
          </Text>
          <Text style={[styles.amount, { color: theme.primaryText }]}>03</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    gap: 2,
  },
  totalBox: {
    padding: 6,
    borderRadius: 15,
    alignItems: "center",
    elevation: 3,
    width: "50%",
    marginBottom: 5,
    flexDirection: "row",
    gap: 5,
  },
  completedBox: {
    padding: 6,
    borderRadius: 15,
    alignItems: "center",
    elevation: 3,
    width: "50%",
    flexDirection: "row",
    gap: 5,
  },
  totalText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  completedText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "600",
  },
  amount: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
  },
  totalIcon: {
    color: "#000",
    marginLeft: 5,
  },
  todayIcon: {
    color: "#4CC9F0",
    marginLeft: 5,
  },
  completedIcon: {
    color: "#6FC276",
  },
});
