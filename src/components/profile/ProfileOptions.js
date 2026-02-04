import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useContext } from "react";
import ColorContext from "../../context/colorContext";

const OPTIONS = [
  {
    Icon: Feather,
    iconName: "heart",
    label: "Favourites",
    onPress: () => console.log("Favourites"),
  },
  {
    Icon: MaterialCommunityIcons,
    iconName: "folder-download-outline",
    label: "Downloads",
    onPress: () => console.log("Downloads"),
  },
  {
    Icon: Feather,
    iconName: "globe",
    label: "Languages",
    onPress: () => console.log("Languages"),
  },
  {
    Icon: Feather,
    iconName: "codesandbox",
    label: "Subscription",
    onPress: () => console.log("Subscription"),
  },
  {
    Icon: MaterialCommunityIcons,
    iconName: "cached",
    label: "Clear cache",
    onPress: () => console.log("Clear cache"),
  },
  {
    Icon: MaterialCommunityIcons,
    iconName: "clock-outline",
    label: "Clear history",
    onPress: () => console.log("Clear history"),
  },
  {
    Icon: Feather,
    iconName: "settings",
    label: "Settings",
    onPress: () => console.log("Settings"),
  },
  {
    Icon: Feather,
    iconName: "log-out",
    label: "Logout",
    danger: true,
    onPress: () => console.log("Logout"),
  },
];

function OptionRow({ Icon, iconName, label, onPress, isLast, danger }) {
  return (
    <TouchableOpacity
      style={[styles.row, isLast && styles.lastRow]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.left}>
        <Icon name={iconName} size={22} color={danger ? "#DA2C20" : "#000"} />
        <Text style={[styles.text, danger && styles.dangerText]}>{label}</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={26} color="#000" />
    </TouchableOpacity>
  );
}

export default function ProfileOptions() {
  const { theme } = useContext(ColorContext);
  return (
    <View
      style={[
        styles.container,
        { borderColor: theme.border, backgroundColor: theme.background },
      ]}
    >
      {OPTIONS.map((item, index) => (
        <OptionRow
          key={item.label}
          {...item}
          isLast={index === OPTIONS.length - 1}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: "85%",
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontSize: 16,
    marginLeft: 12,
    fontWeight: "500",
  },
  dangerText: {
    color: "#DA2C30",
  },
});
