/** @format */

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import colors from "../misc/colors";
import RoundIconBtn from "../components/RoundIconBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Intro = () => {
  const [name, setName] = useState("");
  const handleOnChangeText = (text) => setName(text);

  const handleSubmit = async () => {
    const user = { name: name };
    await AsyncStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.primary} />
      <View style={styles.container}>
        <Text style={styles.textInputTitle}>Enter The Name To Continue</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Name!"
          value={name}
          onChangeText={handleOnChangeText}
        />
        {name.trim().length >= 3 ? (
          <RoundIconBtn antIconName="arrowright" onPress={handleSubmit} />
        ) : null}
      </View>
    </>
  );
};

export default Intro;
const width = Dimensions.get("window").width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: colors.primary,
    width,
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 22,
    color: colors.primary,
    marginBottom: 15,
  },
  textInputTitle: {
    alignSelf: "flex-start",
    marginBottom: 5,
    opacity: 0.5,
  },
});
