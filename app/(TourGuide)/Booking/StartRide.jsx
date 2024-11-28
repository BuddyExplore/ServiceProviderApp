import React, { useState, useRef } from "react";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomContainer from "../../../components/Vehicle/BottomContainer";
import MapComponent from "../../../components/Vehicle/MapComponent";
import { useNavigation } from "expo-router";
import {
  View,
  Text,
  Dimensions,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import FilterTrips from "../../../components/Vehicle/FilterTrips";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { router } from "expo-router";

const GoButton = (props) => {
  const color =
    props.content == "Go"
      ? "#0A89FF"
      : props.content == "Emergency"
      ? "red"
      : "white";
  return (
    <View
      style={{
        position: "absolute",
        top: Dimensions.get("screen").height * props.position[0],
        left: Dimensions.get("screen").width * props.position[1],
        padding: 20,
        borderRadius: 30,
        backgroundColor: color,
        elevation: 4,
      }}
    >
      {props.content == "Go" ? (
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit",
            fontWeight: 700,
            color: "white",
          }}
        >
          {props.content}
        </Text>
      ) : props.content == "Emergency" ? (
        <MaterialIcons name="emergency-share" size={20} color={"white"} />
      ) : (
        ""
      )}
    </View>
  );
};

const OTPModal = ({ isVisible, onClose, navigation }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }

    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Enter the OTP</Text>
          <Text style={styles.modalSubtitle}>
            In order to start the trip, enter the OTP sent to the tourist.
          </Text>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={{
                  width: 20,
                  height: 50,
                  borderBottomWidth: 2,
                  borderColor: "#000",
                  textAlign: "center",
                  fontSize: 18,
                  margin: 10,
                }}
                onChangeText={(text) => handleChange(text, index)}
                value={digit}
                keyboardType="numeric"
                maxLength={1}
                ref={(ref) => (inputs.current[index] = ref)}
              />
            ))}
          </View>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("TripDetail")}
            >
              <Text style={styles.buttonText}>Start Ride</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonless} onPress={onClose}>
              <Text style={styles.buttonlessText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default function StartRide() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <GestureHandlerRootView>
      <MapComponent />
      {/* <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.rideButton}
      >
        <Text style={styles.rideButtonText}>Open OTP Popup</Text>
      </TouchableOpacity> */}
      <BottomContainer onPress={() => setModalVisible(true)} />

      <OTPModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        navigation={navigation}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  otpText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButtonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "#0A89FF",
    borderRadius: 20,
    alignItems: "center",
  },
  buttonless: {
    padding: 10,
    margin: 5,
    // backgroundColor: "#0A89FF",
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonlessText: {
    color: "#0A89FF",
    fontSize: 16,
  },
  rideButton: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    padding: 15,
    backgroundColor: "#0A89FF",
    borderRadius: 10,
  },
  rideButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
