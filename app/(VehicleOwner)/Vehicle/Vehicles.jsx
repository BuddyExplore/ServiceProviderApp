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
      <View style={{ paddingBottom: 20 }}>
        <Image
          source={require("../../../assets/images/Vehicle/bike.png.png")}
          style={{
            width: 110,
            height: 80,
            borderColor: "black",
          }}
        />
      </View>
      <View style={{ paddingVertical: 20 }}>
        <Text>VehicleModel: {data.VehicleModel || "ZR"}</Text>
        <Text>Seats: {data.Seats || "2"}</Text>
        <Text>Speed: {data.Speed || "80Kmph"}</Text>
        <Text>Price (Average): {data.AvgPrice || "200"}</Text>
      </View>
    </View>
  );
};

export default function Vehicle() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Header content="Manage Vehciles" />
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
          colors={[Colors.PRIMARY + "44", Colors.PRIMARY + "44"]}
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
                  color: `${Colors.PRIMARY}`,
                  fontWeight: `${900}`,
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
