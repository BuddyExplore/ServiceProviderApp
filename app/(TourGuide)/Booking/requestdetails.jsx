import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import photo1 from "../../../assets/images/Vehicle/photo1.png";
import { router, useGlobalSearchParams, useNavigation } from "expo-router";

const RequestDetails = (props) => {
  const { accepted } = useGlobalSearchParams() ?? true;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <Text style={styles.headerText}>Request Details</Text> */}

      <ScrollView contentContainerStyle={styles.detailsContainer}>
        {/* User Information */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>User</Text>
          <View style={styles.userInfo}>
            <Image source={photo1} style={styles.avatar} />
            <View>
              <Text style={styles.nameText}>John Doe</Text>
              <TouchableOpacity style={styles.messageButton}>
                <Text style={styles.messageButtonText}>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Vehicle Information */}
        <View style={styles.section}>
          <Text style={styles.infoText}>Toyota Coach</Text>
        </View>

        {/* Trip Dates & Times */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Trip dates & times</Text>
          <View style={styles.dateRow}>
            <Text style={styles.infoText}>Pick-up:</Text>
            <Text style={styles.valueText}>Aug 09, 2024 11:00 am</Text>
          </View>
          <View style={styles.dateRow}>
            <Text style={styles.infoText}>Drop-off:</Text>
            <Text style={styles.valueText}>Aug 11, 2024 10:00 pm</Text>
          </View>
        </View>

        {/* Destinations */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Destinations</Text>
          <TouchableOpacity style={styles.mapButton}>
            <Text style={styles.mapButtonText}>MapView</Text>
          </TouchableOpacity>
          <View style={styles.destinationRow}>
            <Text style={styles.destinationIcon}>📍</Text>
            <Text style={styles.valueText}>Piliyandala Clock Tower</Text>
          </View>
          <View style={styles.destinationRow}>
            <Text style={styles.destinationIcon}>📍</Text>
            <Text style={styles.valueText}>Horton Plains, Nuwara Eliya</Text>
          </View>
          <View style={styles.destinationRow}>
            <Text style={styles.destinationIcon}>📍</Text>
            <Text style={styles.valueText}>Lake Gregory, Nuwara Eliya</Text>
          </View>
          <View style={styles.destinationRow}>
            <Text style={styles.destinationIcon}>📍</Text>
            <Text style={styles.valueText}>Sri Dalada Maligawa, Kandy</Text>
          </View>
        </View>

        {/* Passengers */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Passengers</Text>
          <Text style={styles.valueText}>15 passengers</Text>
        </View>

        {accepted == "true" ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("StartRide")}
          >
            <Text style={{ color: "white", fontWeight: 700 }}>Dispatch</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.rejectButton}>
              <Text style={styles.rejectButtonText}>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  detailsContainer: {
    paddingBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  messageButton: {
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#42A5F5",
    borderRadius: 5,
  },
  messageButtonText: {
    color: "#42A5F5",
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 14,
    color: "#888",
  },
  valueText: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  mapButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  mapButtonText: {
    color: "#42A5F5",
    fontWeight: "bold",
  },
  destinationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  destinationIcon: {
    marginRight: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  rejectButton: {
    backgroundColor: "#E57373",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  rejectButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  acceptButton: {
    backgroundColor: "#42A5F5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
  },
  button: {
    color: "white",
    backgroundColor: "#42A5F5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  acceptButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RequestDetails;
