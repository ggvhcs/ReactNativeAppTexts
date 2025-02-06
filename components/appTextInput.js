import { StyleSheet, TextInput, Text, View, Platform } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../03-3-HelloTexts/config/colors";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon}  style={styles.icon}/>
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}
//
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: colors.light,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
