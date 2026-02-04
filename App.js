import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NotesProvider } from "./src/context/notesContext";
import StackNavigator from "./src/components/navigation/StackNavigator";
import { UserProvider } from "./src/context/UserContext";
import { ColorProvider } from "./src/context/colorContext";

const Screen = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserProvider>
        <NotesProvider>
          <ColorProvider>
            <NavigationContainer>
              <StatusBar style="dark" />
              <StackNavigator />
            </NavigationContainer>
          </ColorProvider>
        </NotesProvider>
      </UserProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
