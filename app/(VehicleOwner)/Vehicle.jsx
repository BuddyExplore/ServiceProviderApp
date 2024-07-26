import React, { Component } from "react";
import { ScrollView, Dimensions, ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import VehicleCard from "../../components/Vehicle/VehicleCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Vehicle/ManageHeader";

// Functional Component for Vehicles
const Vehicles = (data) => {
  return (
    
    <View
      style={{
        padding: 0,
        backgroundColor: "white",
        borderRadius: 10,
        opacity: 0.75,
        padding: 10,
        margin: 10,
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Image
        source={require("../../assets/images/Vehicle/bike.png.png")}
        style={{
          width: 110,
          height: 80,
          borderColor: "black",
        }}
      />
      <View>
        <Text>
          VehicleModel: {data.VehicleModel || "Tesla S1"}
        </Text>
        <Text>Seats: {data.Seats || "Tesla S1"}</Text>
        <Text>Speed: {data.Speed || "Tesla S1"}</Text>
        <Text>
          Price (Average): {data.AvgPrice || "Tesla S1"}
        </Text>
      </View>
    </View>
  );
};

export default class Vehicle extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header content="Manage Vehciles"/>
        <View style={styles.VehicleCardContainer}>
          <VehicleCard vehicle="Car" />
          <VehicleCard vehicle="Jeep" />
          <VehicleCard vehicle="Motor Bike" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: 400 }}>
            <Vehicles />
            <Vehicles />
            <Vehicles />
            <Vehicles />
            <Vehicles />
            <Vehicles />
            <Vehicles />
          </View>
        </ScrollView>
        </SafeAreaView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  VehicleCardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    gap: 18,
    marginHorizontal: 16,
    marginVertical: 18,
    width: Dimensions.get("window").width,
  },
});
