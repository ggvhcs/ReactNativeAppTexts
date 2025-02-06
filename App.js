import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import AppTextInput from "./app/components/appTextInput";

export default function App() {
  console.log("App executed");
  return (
    <View style={styles.container}>
      <AppTextInput placeholder="Username" icon="email" />
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
