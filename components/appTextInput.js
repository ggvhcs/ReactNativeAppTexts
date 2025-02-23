import { StyleSheet, Text, TextInput, View, Platform } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function AppTextInput({ icon, ...otherProps }) {
  const [_text, _setText] = useState("");
  return (
    <View style={styles.container}>
      <Text>{_text}</Text>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
      )}
      <TextInput
        onChangeText={(text) => {
          _setText(text);
        }}
        minLength={6}
        maxLength={11}
        style={styles.textInput}
        {...otherProps}
        keyboardType={otherProps.keyboard}
        secureTextEntry={otherProps.ste}
      />
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
    alignContent:"center",
    alignItems:"center"
  },
  icon: {
    marginRight: 10,
    color: colors.medium,
  },
  textInput: {
    width: "70%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    color: colors.dark,
    fontSize: 16,
    width: "70%",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
