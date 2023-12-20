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

export default function App() {
  const colorScheme = useColorScheme();

  useEffect(() => {}, [colorScheme]);

  const bgColorScheme =
    colorScheme === "light" ? styles.bgLightScheme : styles.bgDarkScheme;
  return (
    <SafeAreaView style={[styles.container, bgColorScheme]}>
      <Text>{colorScheme}</Text>
      <FrontPage colorScheme={colorScheme} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
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
