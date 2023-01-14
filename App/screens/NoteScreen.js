/** @format */

import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../misc/colors";

const NoteScreen = ({ user }) => {
  const [greet, setGreet] = useState({});
  const findGreet = () => {
    const hours = new Date().getHours();
    if (hours === 0 || hours < 12) return setGreet("Morning");
    if (hours === 1 || hours < 17) return setGreet("AfterNoon");
    setGreet("Evening");
  };
  useEffect(() => {
    findGreet();
  });
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.light} />
      <View style={styles.container}>
        <Text style={styles.headerText}>{`Good ${greet} ${user.name.substring(
          0,
          20
        )} !`}</Text>
      </View>
    </>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {},
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
