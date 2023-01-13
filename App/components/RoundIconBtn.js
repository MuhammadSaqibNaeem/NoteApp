/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../misc/colors";
const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
  return (
    <AntDesign
      color={color || colors.light}
      size={size || 24}
      style={[styles.iconStyle, { ...style }]}
      name={antIconName}
      onPress={onPress}
    />
  );
};

export default RoundIconBtn;

const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});
