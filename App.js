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
    if (findUser != null) {
      setUser(JSON.parse(findUser));
    }
  };
  useEffect(() => {
    userInfo();
  }, []);

  if (!user.name) return <Intro onFinish={userInfo} />;
  return <NoteScreen user={user} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
