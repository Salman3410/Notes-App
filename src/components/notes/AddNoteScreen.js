import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons/";
import NotesContext from "../../context/notesContext";
import * as ImagePicker from "expo-image-picker";
import dayjs from "dayjs";
import ColorContext from "../../context/colorContext";

export default function AddNoteScreen({ navigation }) {
  const { theme } = useContext(ColorContext);
  const [image, setImage] = useState();
  const { addNote } = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = () => {
    if (!title || !description) return;

    const rawDateTime = `${date} ${time}`;

    const parsed = dayjs(rawDateTime);

    if (!parsed.isValid()) {
      Alert.alert("Invalid date or time");
      return;
    }

    addNote({
      id: Date.now().toString(),
      title,
      description,
      dateTime: parsed.toISOString(),
      image,
    });

    navigation.goBack();
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required",
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.backBox}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Add Note</Text>
        <View style={{ width: 40, height: 40 }}></View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />

      <View>
        <Button title="Pick an image" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>

      <Pressable style={styles.submitBtn} onPress={onSubmit}>
        <Text style={styles.submitText}>Add Note</Text>
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
    textAlign: "center",
    paddingVertical: 20,
  },
  backBox: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
  },
  submitBtn: {
    backgroundColor: "#6FC276",
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    width: 200,
    height: 200,
  },
});
