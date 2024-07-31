import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/TourGuide/header";
import { router } from "expo-router";
const TripDetailsScreen = ({  navigation }) => {
  const trip = {
    name: "Trip to Ella",
    destination: "Ella, Sri Lanka",
    
    startDate: "2022-10-01",
    endDate: "2022-10-10",
    description: "A trip to explore the beautiful city of Ella.",
    itinerary:
      "Day 1: Visit the Admire the Nine Arch Bridge \nDay 2: Explore Diyaluma Falls\nDay 3:ella flying ravana ",
    activities: "Sightseeing, Shopping, Dining",
    accommodations: "ReverGarden Hotel",
    notes: "Don't forget to try the croissants!",
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Trip Details" navigation={navigation} />
      <View style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.title}>Trip Details</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Trip Name:</Text>
          <Text style={styles.value}>{trip?.name}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Destination:</Text>
          <Text style={styles.value}>{trip?.destination}</Text>
        </View>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Start Date:</Text>
          <Text style={styles.value}>{trip?.startDate}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>End Date:</Text>
          <Text style={styles.value}>{trip?.endDate}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{trip?.description}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Itinerary:</Text>
          <Text style={styles.value}>{trip?.itinerary}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Activities:</Text>
          <Text style={styles.value}>{trip?.activities}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Accommodations:</Text>
          <Text style={styles.value}>{trip?.accommodations}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Notes:</Text>
          <Text style={styles.value}>{trip?.notes}</Text>
        </View>
        <View style={styles.button}>
        <Button title="Go Back" onPress={() => router.push("dashboard")} />
        </View>
        </View>
      </View>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 1,
    justifyContent: "center",
 
  },
  title: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    color: "gray",
  },
  detailsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginRight: 8,
  },
  value: {
    flexShrink: 1,
  },
  button: {
    marginTop: 28,
    marginBottom: 12,
  },
  page: {
    padding: 16,
  },

});

export default TripDetailsScreen;

// Styles...
