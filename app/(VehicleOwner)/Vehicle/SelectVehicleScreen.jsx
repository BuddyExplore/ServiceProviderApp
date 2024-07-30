import React from "react";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native";
import VehicleCard from "../../../components/Vehicle/VehicleCard";

const SelectVehicleScreen = ({ setVehicle, selectedVehicle, goToNextStep }) => {
  const vehicles = ["Car", "Bus", "Jeep", "Tuk Tuk", "Motor Bike", "Van"];
  return (
    <GestureHandlerRootView>
      <View style={{ gap: 20 }}>
        <Text
          style={{
            fontWeight: "800",
            fontSize: 18,
            textAlign: "left",
          }}
        >
          Select Vehicle
        </Text>
        <Text
          style={{
            textAlign: "left",
            fontSize: 18,
            flexWrap: "wrap",
            width: 300,
          }}
        >
          Pick your Vehicle type for tailored driving opportunities.
        </Text>
        <View style={styles.SelectVehicleContainer}>
          {vehicles.map((vehicle) => (
            <TouchableOpacity
              key={vehicle}
              onPress={() => {
                setVehicle(vehicle);
                goToNextStep();
              }}
            >
              <VehicleCard
                vehicle={vehicle}
                isSelected={selectedVehicle === vehicle}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  SelectVehicleContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: 350,
    paddingVertical: 20,
  },
});

export default SelectVehicleScreen;
