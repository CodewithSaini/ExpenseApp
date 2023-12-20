import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Divider({ text }) {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Center items vertically
    width: "60%",
  },
  line: {
    flex: 1, // Take up equal space on both sides of the text
    height: 1, // Line thickness
    backgroundColor: "grey", // Line color
  },
  text: {
    paddingHorizontal: 10, // Space on both sides of the text
    color: "grey", // Text color
    // Add other text styling as needed
  },
});
