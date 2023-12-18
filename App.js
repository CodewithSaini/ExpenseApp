import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import FrontPage from "./components/FrontPage";

export default function App() {
  const colorScheme = useColorScheme();
  const bgColorScheme = colorScheme === "light" ? bgLightScheme : bgDarkScheme;
  return (
    <View style={[styles.container, bgColorScheme]}>
      <FrontPage colorScheme={colorScheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgDarkScheme: {
    backgroundColor: "#303030",
  },
  bgLightScheme: {
    backgroundColor: "#f8f8f8",
  },
});
