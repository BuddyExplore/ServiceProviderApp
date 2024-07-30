import React, { Component } from "react";
import DashboardComponent from "../../../components/Vehicle/DashboardComponent";
import Header from "../../../components/Vehicle/ManageHeader";
import { Button, Dimensions, View } from "react-native";
import { Colors } from "../../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";

export default function DashboardScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        height: Dimensions.get("screen").height,
        backgroundColor: "#F5F5F5",
      }}
    >
      <Header content="Dashboard" />
      <Button
        title="navigate to stack"
        onPress={() => {
          navigation.navigate("TripDetails");
        }}
      />
      <DashboardComponent earning="25000" Trips="15" />
    </SafeAreaView>
  );
}
