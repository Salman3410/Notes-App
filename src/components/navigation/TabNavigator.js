import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../../screens/profileScreen";
import NotesScreen from "../../screens/notesScreen";
import CustomTabBar from "../CustomTabBar";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="NotesTab" component={NotesScreen} />
      <Tab.Screen name="ProfileTab" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
