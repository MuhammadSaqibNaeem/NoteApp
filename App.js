/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./App/misc/colors";
import Intro from "./App/screens/Intro";
export default function App() {
  const user = async () => {
    const username = AsyncStorage.getItem("user");
    console.log(username);
  };
  useEffect(() => {
    user();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <View style={styles.container}>
        <Intro />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
