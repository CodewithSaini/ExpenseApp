import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";
import { useFonts, Whisper_400Regular } from "@expo-google-fonts/whisper";

export default function FrontPage() {
  const colorScheme = useColorScheme();
  let [fontsLoaded, fontError] = useFonts({ Whisper_400Regular });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const textColorScheme =
    colorScheme === "light" ? textLightScheme : textDarkScheme;

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.text}>Expense App</Text>
      <View>
        <TextInput style={[styles.input, textColorScheme]}></TextInput>
        <TextInput style={[styles.input, textColorScheme]}></TextInput>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 350,
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    fontSize: 18,
  },
  safe: {
    height: 800,
    width: 200,
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    fontFamily: "Whisper_400Regular",
    fontSize: 40,
  },
  textLightScheme: {
    color: "#303030",
  },
  textDarkScheme: {
    color: "#f8f8f8",
  },
});
