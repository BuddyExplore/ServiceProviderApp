import { Image, Text, View, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import React, { Component } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function BottomContainer(props) {
  let time = "12";
  let name = "John Doe";
  let distance = "4.6";

  return (
    <View style={styles.bottomcontainer}>
      <Text style={{ fontWeight: "800", fontSize: 20, textAlign: "center" }}>
        {time}min -{" "}
        <Text style={{ fontWeight: "500", fontSize: 12 }}>{distance}km</Text>
      </Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 16 }}>
        <Feather name="user" />
        <Text>Tourist</Text>
      </View>
      <View style={{ flexDirection: "row",justifyContent: 'center', alignItems:'center', gap: 20,  }}>
        <Image
          source={require("../../assets/images/Vehicle/photo2.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text>{name}</Text>
        <TouchableOpacity
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 80,
          }}
          onPress={props.onPress}
        >
          <Text
            style={{
              padding: 10,
              margin: 5,
              backgroundColor: "#FFF",
              borderRadius: 5,
              alignItems: "center",
              color: "#0A89FF",
              borderColor: "#0A89FF",
              borderWidth: 2,
              marginLeft: 50,
              // justifyContent: "center",
              textAlign: "center",
              // width: 100,
            }}
          >
            message
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 80,
        }}
        onPress={props.onPress}
      >
        <Text
          style={{
            padding: 12,
            margin: 5,
            backgroundColor: "#0A89FF",
            borderRadius: 50,
            alignItems: "center",
            color: "white",
            // justifyContent: "center",
            textAlign: "center",
            width: 300,
            fontSize: 15,
          }}
        >
          Start Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomcontainer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 400,
    backgroundColor: "white",
    flexDirection: "column",
    gap: 25,
    // justifyContent: "space-between",
    // alignItems: "center",
    padding: 15,
  },
  bottomText: {
    fontSize: 22,
    color: "4a4a4a",
  },
});
