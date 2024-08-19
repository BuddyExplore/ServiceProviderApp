import React from "react";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import VehicleCard from "../../../components/Vehicle/VehicleCard";

const SelectVehicleScreen = ({ setVehicle, selectedVehicle, goToNextStep }) => {
  const vehicles = ["Car", "Bus", "Jeep", "Tuk Tuk", "Motor Bike", "Van"];
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 60) / 2; // 20px margin on each side and 20px gap between cards

  return (
    <GestureHandlerRootView>
      <View style={{ padding: 20 }}>
        <View
          style={{
            paddingHorizontal: 2,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "left",
          }}
        >
          <Text style={styles.title}>Select Vehicle</Text>
          <Text style={styles.subtitle}>
            Pick your Vehicle type for tailored driving opportunities.
          </Text>
        </View>
        <View style={styles.SelectVehicleContainer}>
          {vehicles.map((vehicle) => (
            <TouchableOpacity
              key={vehicle}
              onPress={() => {
                setVehicle(vehicle);
                goToNextStep();
              }}
              style={{ width: cardWidth }}
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
  },
  title: {
    fontWeight: "800",
    fontSize: 18,
    textAlign: "left",
    marginTop: 20,
  },
  subtitle: {
    textAlign: "left",
    fontSize: 18,
    flexWrap: "wrap",
    width: "100%",
    marginBottom: 20,
  },
});

export default SelectVehicleScreen;
