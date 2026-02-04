import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function EditProfile({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.editBtn}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.editText}>Edit Profile</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  editBtn: {
    backgroundColor: "#E63946",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 15,
  },
  editText: {
    color: "#fff",
    fontSize: 16,
  },
});
