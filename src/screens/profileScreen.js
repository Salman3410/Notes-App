import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileOptions from "../components/profile/ProfileOptions";
import EditProfile from "../components/profile/EditProfile";
import { useContext } from "react";
import ColorContext from "../context/colorContext";

export default function ProfileScreen({ navigation }) {
  const { theme } = useContext(ColorContext);
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <Text style={[styles.header, { color: theme.primaryText }]}>
        My Profile
      </Text>
      <View style={styles.headerSection}>
        <ProfileHeader />
        <View style={styles.editProfileWrapper}>
          <EditProfile onPress={() => navigation.navigate("EditProfile")} />
        </View>
      </View>
      <ProfileOptions />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  headerSection: {
    width: "85%",
  },
  editProfileWrapper: {
    marginTop: 6,
  },
});
