/** @format */

import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import RoundIconBtn from "../components/RoundIconBtn";
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
        <Text style={styles.headerText}>{`Good ${greet} ${user.name} !`}</Text>
        <SearchBar ContainerStyle={{ marginVertical: 15 }} />
        <View
          style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}
        >
          <Text style={styles.emptyHeaderText}>Add Note</Text>
        </View>
        <RoundIconBtn antIconName={"plus"} style={styles.addBtn} />
      </View>
    </>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  emptyHeaderText: {
    fontSize: 30,
    fontWeight: "bold",
    opacity: 0.3,
    textTransform: "uppercase",
  },
  addBtn: {
    position: "absolute",
    bottom: 50,
    right: 20,
  },
});
