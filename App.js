import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import FrontPage from "./components/FrontPage/FrontPage";
import { useEffect } from "react";
import ThemeContext from "./components/Utilities/ThemeContext";

export default function App() {
  const colorScheme = useColorScheme();

  const bgColorScheme =
    colorScheme === "light" ? styles.bgLightScheme : styles.bgDarkScheme;
  return (
    <ThemeContext.Provider value={colorScheme}>
      <SafeAreaView style={[styles.container, bgColorScheme]}>
        <FrontPage />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    justifyContent: "space-evenly",
  },
  bgDarkScheme: {
    backgroundColor: "#303030",
  },
  bgLightScheme: {
    backgroundColor: "#ffffff",
  },
});
