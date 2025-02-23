import React from "react";
import { StyleSheet, View } from "react-native";

import AppTextInput from "./components/appTextInput";

export default function App() {
  console.log("AppText on React Native  executed");

  return (
    <View style={styles.container}>
      <AppTextInput
        placeholder="Nombre de Usuario..."
        icon="account"
        keyboard="numeric"
        ste={false}
      />
      <AppTextInput
        placeholder="Contraceña..."
        icon="account"
        keyboard="default"
        ste={true}
      />
    </View>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
