import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Button,
  Keyboard,
} from "react-native";
import { useFonts, Whisper_400Regular } from "@expo-google-fonts/whisper";
import { Fragment } from "react";
import Divider from "./Divider";
import { useState } from "react";

export default function FrontPage({ colorScheme }) {
  let [fontsLoaded, fontError] = useFonts({ Whisper_400Regular });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const textColorScheme =
    colorScheme === "light" ? styles.textLightScheme : styles.textDarkScheme;

  const handleSignin = (state) => {
    console.log(username, password);
    setPassword("");
    setUsername("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.maincontainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.safe}>
          <Text style={[styles.text, textColorScheme]}>Expense App</Text>
          <View>
            <TouchableOpacity style={styles.specialButton}>
              <Image
                source={require("../../assets/search.png")}
                style={styles.image}
              />
              <Text style={{ fontSize: 24 }}>Continue with Google</Text>
            </TouchableOpacity>
          </View>
          <Divider text="or" />
          <View style={styles.form}>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={[styles.input, textColorScheme]}
            ></TextInput>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={[styles.input, textColorScheme]}
            ></TextInput>
            <TouchableOpacity onPress={handleSignin} style={styles.button}>
              <Text style={{ color: "#ffffff", fontSize: 20 }}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.signup}>
        <Text>Don't have an account?</Text>
        <Button title="Sign up"></Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: 350,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    fontSize: 18,
  },
  safe: {
    height: 750,
    width: "90%",
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  maincontainer: {
    flex: 1,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Whisper_400Regular",
    fontSize: 40,
    marginBottom: 70,
  },
  textLightScheme: {
    color: "#303030",
  },
  textDarkScheme: {
    color: "#f8f8f8",
  },
  button: {
    marginTop: 10,
    width: 350,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  specialButton: {
    flexDirection: "row",
    borderRadius: 25,
    gap: 20,
    width: 320,
    height: 55,
    borderWidth: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 32,
    height: 32,
  },
  signup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
