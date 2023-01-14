/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./App/misc/colors";
import Intro from "./App/screens/Intro";
import NoteScreen from "./App/screens/NoteScreen";
export default function App() {
  const [user, setUser] = useState({});
  const userInfo = async () => {
    const findUser = await AsyncStorage.getItem("user");
    setUser(JSON.parse(findUser));
    // alert(findUser);
  };
  useEffect(() => {
    userInfo();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* <Intro /> */}
        <NoteScreen user={user} />
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
