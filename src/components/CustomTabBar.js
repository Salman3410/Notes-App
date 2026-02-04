import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";
import ColorContext from "../context/colorContext";

export default function CustomTabBar({ state, descriptors, navigation }) {
  const { theme } = useContext(ColorContext);
  const icons = {
    HomeTab: "home",
    NotesTab: "file-text",
    ProfileTab: "user",
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={route.key}
            onPress={onPress}
            style={[styles.tab, isFocused && styles.activeTab]}
          >
            <Feather
              name={icons[route.name]}
              size={24}
              color={isFocused ? theme.iconActive : theme.iconInactive}
            />

            <Text
              style={{
                color: isFocused ? theme.iconActive : theme.iconInactive,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    // borderTopWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomColor: "#fff",
  },
});
