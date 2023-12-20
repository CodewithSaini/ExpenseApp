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
import { useState, useContext } from "react";
import ThemeContext from "../Utilities/ThemeContext";
import Font from "../Utilities/Font";
import Signin from "./Signin";
import Signup from "./Signup";
export default function FrontPage() {
  Font();
  const [signUp, setSignUp] = useState(false);
  const colorScheme = useContext(ThemeContext);
  const textColor = colorScheme === "light" ? "#404040" : "grey";
  const textColorScheme =
    colorScheme === "light" ? styles.textLightScheme : styles.textDarkScheme;

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
        <Text style={{ color: textColor }}>Don't have an account?</Text>
        <Button
          onPress={() => {
            setSignUp(true);
          }}
          title="Sign up"
        ></Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safe: {
    height: "90%",
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
    marginBottom: 70,
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
    padding: 5,
  },
});
