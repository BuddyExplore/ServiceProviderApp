import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import VehicleCard from "../../components/Vehicle/VehicleCard";
import GestureHandlerRootView from "react-native-gesture-handler";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";

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
          VehcileModel:{!data.VehicleModel ? "Tesla S1" : data.VehicleModel}
        </Text>
        <Text>Seats:{!data.Seats ? "Tesla S1" : data.Seats}</Text>
        <Text>Speed:{!data.Speed ? "Tesla S1" : data.Speed}</Text>
        <Text>
          Price(Average):{!data.AvgPrice ? "Tesla S1" : data.AvgPrice}
        </Text>
      </View>
    </View>
  );
};
export default class Vehicle extends Component {
  render() {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.VehicleCardContainer}>
          <VehicleCard vehicle="Car" />
          <VehicleCard vehicle="Jeep" />
          <VehicleCard vehicle="Motor Bike" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: 100 }}>
            <Vehicles />
            <Vehicles />
            <Vehicles />
            <Vehicles />
            <Vehicles />
            <Vehicles />
            <Vehicles />
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    );
  }
}

const styles = StyleSheet.create({
  VehicleCardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    gap: 18,
    marginHorizontal: 16,
    marginVertical: 18,
    width: Dimensions.get("window"),
  },
});
