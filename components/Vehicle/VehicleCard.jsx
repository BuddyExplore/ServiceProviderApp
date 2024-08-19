import { Text, StyleSheet, View, Dimensions } from "react-native";
import React, { Component } from "react";
import { Image } from "react-native";

const VehicleCard = (props) => {
  const { vehicle } = props;
  let imagePath;
  let vehicleName = vehicle;

  switch (vehicle) {
    case "Car":
      imagePath = require("../../assets/images/Vehicle/car.png");
      break;
    case "Bus":
      imagePath = require("../../assets/images/Vehicle/bus.png");
      break;
    case "Jeep":
      imagePath = require("../../assets/images/Vehicle/jeep.png");
      break;
    case "Tuk Tuk":
      imagePath = require("../../assets/images/Vehicle/tuktuk.png");
      break;
    case "Motor Bike":
      imagePath = require("../../assets/images/Vehicle/motorbike.png");
      break;
    case "Van":
      imagePath = require("../../assets/images/Vehicle/van.png"); // Default image
      break;
    default:
      break;
  }

  return (
    <View style={styles.VehicleCard}>
      <Image source={imagePath} style={styles.VehicleImage} />
      <Text style={styles.VehicleName}>{vehicle}</Text>
    </View>
  );
};

export default VehicleCard;

const styles = StyleSheet.create({
  VehicleCard: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  VehicleImage: {
    width: Dimensions.get("screen").width / 6.5,
    height: Dimensions.get("screen").height / 20,
    borderRadius: 10,
    opacity: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  VehicleName: { justifyContent: "center", textAlign: "center", fontSize: 18 },
});
