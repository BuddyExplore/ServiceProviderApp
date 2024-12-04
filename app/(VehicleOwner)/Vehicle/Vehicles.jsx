import React, { Component } from "react";
import {
  ScrollView,
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import VehicleCard from "../../../components/Vehicle/VehicleCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Vehicle/ManageHeader";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../../constants/Colors";
import { useNavigation } from "expo-router";
import axios from "axios";
import {Urls} from "../../../constants/Urls"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Vehicles = ({data}) => {

  const getVehicleImage = (vehicleType) => {
    switch (vehicleType) {
      case "Car":
        return require("../../../assets/images/Vehicle/car.png");
      case "Bus":
        return require("../../../assets/images/Vehicle/bus.png");
      case "Van":
        return require("../../../assets/images/Vehicle/van.png");
      default:
        return require("../../../assets/images/Vehicle/car.png"); // Default image if no match
    }
  };

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
        gap: 20,
        alignItems: 'center'
      }}
    >
      <View style={{ paddingBottom: 20 }}>
        <Image
          source={getVehicleImage(data.VehicleType)}
          style={{
            width: 80,
            height: 80,
            borderColor: "black",
          }}
        />
      </View>
      <View style={{ paddingVertical: 20 }}>
        <Text>ID: {data.Id}</Text>
        <Text>VehicleModel: {data.VehicleModel}</Text>
        <Text>Seats: {data.Seats}</Text>
        <Text>Price (Average): {data.AvgPrice || "200"}</Text>
      </View>
    </View>
  );
};

export default function Vehicle() {
  const navigation = useNavigation();
  
  const vehicleData = [
    {
      Id: 12,
      VehicleType: "Car",
      VehicleModel: "Toyota Corolla",
      Seats: 4,
      Speed: "120Kmph",
      AvgPrice: "300"
    },
    {
      Id: 101,
      VehicleType: "Bus",
      VehicleModel: "Mitsubishi Fuso",
      Seats: 40,
      Speed: "90Kmph",
      AvgPrice: "800"
    },
    {
      Id: 122,
      VehicleType: "Van",
      VehicleModel: "Nissan Caravan",
      Seats: 12,
      Speed: "100Kmph",
      AvgPrice: "500"
    }
  ];

  return (
    <SafeAreaView>
      <Header content="Vehicles" />
      <Text
        style={{
          paddingHorizontal: 20,
          paddingVertical: 2,
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        Categories
      </Text>
      <View style={styles.VehicleCardContainer}>
        <VehicleCard vehicle="Car" />
        <VehicleCard vehicle="Jeep" />
        <VehicleCard vehicle="Motor Bike" />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignContent: "space-evenly",
          gap: Dimensions.get("window").width / 2.6,
        }}
      >
        <Text
          style={{
            paddingHorizontal: 20,
            paddingVertical: 2,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          Vehicles
        </Text>
        <LinearGradient
          locations={[0, 1]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={["#0A89FF","#0A89FF"]}
          style={{ borderRadius: 28 }}
        >
          <TouchableOpacity>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                borderRadius: 18,

                paddingHorizontal: 19,
                height: 40,
              }}
            >
              <Text
                style={{
                  color: `white`,
                  fontWeight: 'bold'
                }}
                onPress={() => {
                  navigation.navigate("AddVehicle");
                }}
              >
                Add vehicle
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 400 }}>

        {vehicleData.map((data, index) => (
            <Vehicles data={data}/>
          ))}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
