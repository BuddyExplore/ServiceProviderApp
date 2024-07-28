import { Text, View, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import React, { Component } from "react";

export default class BottomContainer extends Component {
  render() {
    return (
      <View style={styles.bottomcontainer}>
        <Entypo name={"menu"} size={24} />
        <Text style={styles.bottomText}>You are Online</Text>
        <Entypo name={"menu"} size={24} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomcontainer: {
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  bottomText: {
    fontSize: 22,
    color: "4a4a4a",
  },
});
