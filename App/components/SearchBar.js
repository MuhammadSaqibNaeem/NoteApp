/** @format */

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import colors from "../misc/colors";
const SearchBar = ({ ContainerStyle }) => {
  return (
    <View style={[styles.container, { ...ContainerStyle }]}>
      <TextInput placeholder="Search Here..." style={styles.SearchStyle} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  SearchStyle: {
    borderWidth: 2,
    borderColor: colors.primary,
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
  },
  container: {},
});
