import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useUser } from "../../context/UserContext";
import { useContext } from "react";
import ColorContext from "../../context/colorContext";

export default function ProfileHeader() {
  const { theme } = useContext(ColorContext);
  const { user, updateProfile } = useUser();

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
      updateProfile({ image: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.profileRow}>
      <View style={styles.imageWrapper}>
        <Image
          source={
            user.image ? { uri: user.image } : require("../../../images/Mi.png")
          }
          style={[styles.image, { borderColor: theme.border }]}
        />
        <TouchableOpacity
          onPress={pickImage}
          style={styles.cameraIcon}
          activeOpacity={0.8}
        >
          <AntDesign name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={[styles.name, { color: theme.primaryText }]}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={[styles.username, { color: theme.secondaryText }]}>
          @{user.username}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoWrapper: {
    marginLeft: 20,
  },
  imageWrapper: {
    width: 120,
    height: 120,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
    borderWidth: 1,
  },
  cameraIcon: {
    position: "absolute",
    right: 2,
    bottom: 2,
    backgroundColor: "#E63946",
    padding: 6,
    borderRadius: 18,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "500",
  },
  username: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 6,
  },
});
