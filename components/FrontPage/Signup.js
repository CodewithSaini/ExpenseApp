import React from "react";
import { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  Button,
} from "react-native";
import ThemeContext from "../Utilities/ThemeContext";


export default function Signup() {
  const colorScheme = useContext(ThemeContext);
  const textColorScheme =
    colorScheme === "light" ? styles.textLightScheme : styles.textDarkScheme;
  const textColor = colorScheme === "light" ? "#404040" : "#f8f8f8";
  return (
    <>
      <View style={styles.signup}>
        <Text style={{ color: textColor, fontSize: 20, margin: 5 }}>
          Create an acoount
        </Text>
        <TextInput
          placeholder="First name"
          style={[styles.input, textColorScheme]}
        ></TextInput>
        <TextInput
          placeholder="Last name"
          style={[styles.input, textColorScheme]}
        ></TextInput>
        <TextInput
          placeholder="Email"
          style={[styles.input, textColorScheme]}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={[styles.input, textColorScheme]}
        ></TextInput>
        <TouchableHighlight underlayColor={"#0066FF"} style={styles.button}>
          <Text style={{ color: "#f8f8f8", fontSize: 18 }}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {},
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
  btn: {
    position: "absolute",
    left: 5,
    top: 5,
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
  signup: {},
});
