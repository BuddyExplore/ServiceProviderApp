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
import { Ionicons } from "@expo/vector-icons";

const Vehicles = (data) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../../assets/images/Vehicle/van1.png")}
          style={{
            width: 100,
            height: 80,
          }}
        />
      </View>
      <View style={{ paddingVertical: 20, paddingHorizontal: 40 }}>
        <Text style={{ fontWeight: "bold" }}>
          {data.VehicleModel || "Toyota Coach"}
        </Text>
        <Text>{data.Review || "2"}</Text>
        <Text>{data.Area || "Piliyandala"}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end", marginRight:10}}>
        <Ionicons name="chevron-forward-outline" size={24} color="black" />
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
    alignItems: "center",
    gap: 20,
    marginHorizontal: 32,
    marginVertical: 18,
    height: 90,
    width: Dimensions.get("window").width,
  },
});
