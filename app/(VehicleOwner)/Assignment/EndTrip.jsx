import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";

export default function EndTrip() {
  const navigation = useNavigation();
  
  return (
    <GestureHandlerRootView>
      <View
        style={{
          flex: 1,
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            width: 350,
            paddingBottom: "40%",
          }}
        >
          Your have ended the trip. Provide the otp mentioned below to the
          tourist confirm the end of the trip.
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginHorizontal: 15,
            color: "#878787",
            paddingBottom: 350,
          }}
        >
          Provide the OTP below to tourist to end the trip.
        </Text>
        <TouchableOpacity
          style={{
            margin: 25,
            backgroundColor: "#0A89FF",
            borderRadius: 50,
            alignItems: "center",
            color: "white",
            justifyContent: "center",
            textAlign: "center",
            width: 324,
            height: 51,
            fontSize: 15,
          }}
          onPress={() => navigation.navigate("TripDetail")}
        >
          <Text style={{ color: "white" }}>Back Trip</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
