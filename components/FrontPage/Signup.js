import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function Signup() {
  return (
    <View style={styles.signup}>
      <TextInput style={styles.input}></TextInput>
    </View>
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
  signup: {},
});
