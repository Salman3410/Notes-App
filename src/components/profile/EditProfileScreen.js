import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons/";
import { useState } from "react";
import { useUser } from "../../context/UserContext";

export default function EditProfileScreen({ navigation }) {
  const { user, updateProfile } = useUser();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [username, setUsername] = useState(user.username);

  const onSubmit = () => {
    if (!firstName || !lastName || !username) return;

    updateProfile({ firstName, lastName, username });
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.backBox}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>Edit Profile</Text>
        <View style={{ width: 40, height: 40 }}></View>
      </View>
      <TextInput
        placeholder="First Name"
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name"
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <Pressable
        style={styles.btnBox}
        onPress={onSubmit}
        disabled={!firstName || !lastName || !username}
      >
        <Text style={styles.btnText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 20,
  },
  backBox: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  backIcon: {},
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  btnBox: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#6FC276",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 16,
    color: "#fff",
  },
});
