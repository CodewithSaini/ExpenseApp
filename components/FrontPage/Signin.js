import React from "react";
import {
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { useContext, useState } from "react";
import Divider from "./Divider";
import ThemeContext from "../Utilities/ThemeContext";
export default function Signin() {
  const colorScheme = useContext(ThemeContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const textColorScheme =
    colorScheme === "light" ? styles.textLightScheme : styles.textDarkScheme;

  const textColor = colorScheme === "light" ? "#404040" : "grey";
  const handleSignin = (state) => {
    console.log(username, password);
    setPassword("");
    setUsername("");
  };
  return (
    <>
      <View>
        <TouchableOpacity style={styles.specialButton}>
          <Image
            source={require("../../assets/search.png")}
            style={styles.image}
          />
          <Text style={{ color: textColor, fontSize: 20 }}>
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
      <Divider text="or" />
      <View>
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
          <Text style={{ color: "#f8f8f8", fontSize: 18 }}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 350,
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    fontSize: 16,
  },
  text: {
    fontFamily: "Whisper_400Regular",
    fontSize: 44,
    marginBottom: 70,
  },
  textLightScheme: {
    color: "#3702b3",
  },
  textDarkScheme: {
    color: "#bb86fc",
  },
  button: {
    marginTop: 10,
    width: 350,
    height: 40,
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
    borderColor: "grey",
    gap: 20,
    width: 320,
    height: 45,
    borderWidth: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 28,
    height: 28,
  },
});
