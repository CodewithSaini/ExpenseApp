import { useFonts, Whisper_400Regular } from "@expo-google-fonts/whisper";

export default Font = () => {
  let [fontsLoaded, fontError] = useFonts({ Whisper_400Regular });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return fontsLoaded;
};
