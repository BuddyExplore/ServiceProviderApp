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
import photo2 from "../../../assets/images/Vehicle/photo2.png";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const RequestCard = (data) => {
  return (
    <View style={styles.requestCard}>
      <View style={styles.requestHeader}>
        <Image source={data.photo ?? photo1} style={styles.avatar} />
        <View>
          <Text style={styles.nameText}>{data.name ?? "Laura Anne"}</Text>
          <Text style={styles.dateText}>{data.date ?? "Aug 25 - Aug 28"}</Text>
        </View>

        <TouchableOpacity
          style={styles.moreOptions}
          onPress={() =>
            router.push("(TourGuide)/Booking/requestdetails?accepted=false")
          }
        >
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.requestBody}>
        <Text style={styles.infoText}>Pick up</Text>
        <Text style={styles.valueText}>122, Hill Street, Walla</Text>

        <Text style={styles.infoText}>Destinations</Text>
        <Text style={styles.valueText}>4</Text>

        <Text style={styles.infoText}>Vehicle</Text>
        <Text style={styles.valueText}>Toyota Coach</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.rejectButton}>
          <Text style={styles.rejectButtonText}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.acceptButtonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const IncomingRequests = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.requestsContainer}>
        <RequestCard />
        <RequestCard />
        {/* Add more request cards as needed */}
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
  requestsContainer: {
    paddingBottom: 20,
  },
  requestCard: {
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 1, // For Android shadow
  },
  requestHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  arrow: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    alignItems: "right",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dateText: {
    color: "#888",
  },
  moreOptions: {
    marginLeft: "auto",
  },
  requestBody: {
    marginVertical: 10,
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  rejectButton: {
    backgroundColor: "#e57373",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  rejectButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  acceptButton: {
    backgroundColor: "#42A5F5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  acceptButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default IncomingRequests;
