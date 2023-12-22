import React from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
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
  const specialBtnBg =
    colorScheme === "light"
      ? styles.specialBtnLightBg
      : styles.specialBtnDarkBg;
  const underlyingBg = colorScheme === "light" ? "#f9f9f9" : "#414141";
  const textColor = colorScheme === "light" ? "#404040" : "grey";
  const handleSignin = (state) => {
    console.log(username, password);
    setPassword("");
    setUsername("");
  };
  return (
    <>
      <View>
        <TouchableHighlight
          onPress={() => console.log("hi")}
          underlayColor={underlyingBg}
          activeOpacity={0.7}
          style={[styles.specialButton, specialBtnBg]}
        >
          <View style={styles.specialButtonInner}>
            <Image
              source={require("../../assets/search.png")}
              style={styles.image}
            />
            <Text style={{ color: textColor, fontSize: 20 }}>
              Continue with Google
            </Text>
          </View>
        </TouchableHighlight>
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
        <TouchableHighlight
          underlayColor={"#0066FF"}
          onPress={handleSignin}
          style={styles.button}
        >
          <Text style={{ color: "#f8f8f8", fontSize: 18 }}>Sign in</Text>
        </TouchableHighlight>
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
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  textDarkScheme: {
    color: "#f8f8f8",
    backgroundColor: "#404040",
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
    borderRadius: 25,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    height: 45,
    borderWidth: 1,
    padding: 5,
  },
  specialBtnLightBg: {
    backgroundColor: "#f8f8f8",
  },
  specialBtnDarkBg: {
    backgroundColor: "#404040",
  },
  image: {
    width: 28,
    height: 28,
  },
  specialButtonInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
