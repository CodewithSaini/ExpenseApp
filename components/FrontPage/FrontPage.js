import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Button,
  Keyboard,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import ThemeContext from "../Utilities/ThemeContext";
import Signin from "./Signin";
import Signup from "./Signup";
import { useFonts, Whisper_400Regular } from "@expo-google-fonts/whisper";
export default function FrontPage() {
  const [signUp, setSignUp] = useState(false);
  const colorScheme = useContext(ThemeContext);
  const textColor = colorScheme === "light" ? "#404040" : "grey";
  const textColorScheme =
    colorScheme === "light" ? styles.textLightScheme : styles.textDarkScheme;
  const [fontsLoaded, fontError] = useFonts({
    Whisper_400Regular,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.maincontainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.safe}>
          <Text style={[styles.text, textColorScheme]}>ExpenseExpert</Text>
          {signUp ? <Signup style={styles} /> : <Signin style={styles} />}
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.signup}>
        {signUp ? (
          <>
            <Text style={{ color: textColor }}>Already have an account?</Text>
            <Button
              onPress={() => {
                setSignUp(false);
              }}
              title="Sign in"
            ></Button>
          </>
        ) : (
          <>
            <Text style={{ color: textColor }}>Don't have an account?</Text>
            <Button
              onPress={() => {
                setSignUp(true);
              }}
              title="Sign up"
            ></Button>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safe: {
    height: "80%",
    width: "100%",
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  maincontainer: {
    flex: 1,
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Whisper_400Regular",
    fontSize: 44,
    marginVertical: 20,
  },
  textLightScheme: {
    color: "#3702b3",
  },
  textDarkScheme: {
    color: "#bb86fc",
  },

  signup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
});
