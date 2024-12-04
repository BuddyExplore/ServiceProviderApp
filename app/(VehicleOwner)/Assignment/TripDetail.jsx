import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import axios from "axios";
import {Urls} from "../../../constants/Urls"
import AsyncStorage from '@react-native-async-storage/async-storage';

const TripDetailsScreen = () => {

  const navigation = useNavigation();

  const [booking,setBooking] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchUserFromStorage = async () => {
      try {
        const bookingData = await AsyncStorage.getItem('booking');
        if (bookingData) {
          setBooking(JSON.parse(bookingData)); // Parse the JSON string back to an object
          console.log(bookingData)
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage', error);
      }
    };

    fetchUserFromStorage();
    setLoading(false)
  }, []);


  const handleEndTrip = () => {
    const fetchItems = async () => {
      console.log(booking)
      try {
        const response = await axios.put(
          `${Urls.SPRING}/api/Booking/Vehicle/updateStatus/${booking.id}/4`
        );
        console.log("Done")
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
    navigation.navigate("EndTrip")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.subheader}>
        The journey has started. Escort the tourist(s) to their desired
        destinations.
      </Text>

      <ScrollView style={styles.destinationList}>
        <View style={styles.destinationItem}>
          <Ionicons name="location-outline" size={24} color="black" />
          <View style={styles.destinationDetails}>
            <Text style={styles.destinationName}>
              Horton Plains, Nuwara Eliya
            </Text>
            <View style={styles.buttonGroup}>
              {/* <TouchableOpacity style={styles.mapButton}>
                <Text style={styles.mapButtonText}>MapView</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.mapButton}>
                <Text style={styles.mapButtonText}>Mark as Visited</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.destinationItem}>
          <Ionicons name="location-outline" size={24} color="black" />
          <View style={styles.destinationDetails}>
            <Text style={styles.destinationName}>
              Lake Gregory, Nuwara Eliya
            </Text>
            <View style={styles.buttonGroup}>
              {/* <TouchableOpacity style={styles.mapButton}>
                <Text style={styles.mapButtonText}>MapView</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.mapButton}>
                <Text style={styles.mapButtonText}>Mark as Visited</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.destinationItem}>
          <Ionicons name="location-outline" size={24} color="black" />
          <View style={styles.destinationDetails}>
            <Text style={styles.destinationName}>
              Sri Dalada Maligawa, Kandy
            </Text>
            <View style={styles.buttonGroup}>
              {/* <TouchableOpacity style={styles.mapButton}>
                <Text style={styles.mapButtonText}>MapView</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.mapButton}>
                <Text style={styles.mapButtonText}>Mark as Visited</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.returnContainer}>
        <Text style={styles.returnLabel}>Return Date & Time</Text>
        <Text style={styles.returnDate}>Aug 04, 2024 11:00 am</Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipText}>
          Tip: For emergencies, contact the system right away.
        </Text>
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapButtonText}>Report</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.endTripButton}
        onPress={handleEndTrip}
      >
        <Text style={styles.endTripButtonText}>End Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subheader: {
    fontSize: 14,
    color: "#6e6e6e",
    marginBottom: 20,
  },
  destinationList: {
    marginBottom: 20,
  },
  destinationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  destinationDetails: {
    marginLeft: 10,
    flex: 1,
  },
  destinationName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
  },
  mapButton: {
    backgroundColor: "#e6f0ff",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  mapButtonText: {
    color: "#007bff",
    fontWeight: "bold",
  },
  markButton: {
    backgroundColor: "#f9e6ff",
    padding: 10,
    borderRadius: 5,
  },
  markButtonText: {
    color: "#b300b3",
    fontWeight: "bold",
  },
  returnContainer: {
    marginBottom: 20,
  },
  returnLabel: {
    fontSize: 14,
    color: "#6e6e6e",
  },
  returnDate: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tipContainer: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  tipText: {
    fontSize: 14,
    color: "#6e6e6e",
  },
  reportButton: {
    backgroundColor: "#ffcccc",
    padding: 10,
    borderRadius: 5,
  },
  reportButtonText: {
    color: "#ff4d4d",
    fontWeight: "bold",
  },
  endTripButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  endTripButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default TripDetailsScreen;
