import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, IconButton } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";

// import Icon from 'react-native-vector-icons/MaterialIcons';

const BookingCard = ({ booking }) => {
  // <Feather name="info" size={24} color="black" />

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "green";
      case "Pending":
        return "orange";
      case "Checked In":
        return "blue";
      default:
        return "black";
    }
  };

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.infoIconContainer}>
          <IconButton
            icon={() => <Feather name="info" size={24} color="#0A89FF" />}
            onPress={() =>
              console.log(`Info for booking ID: ${booking.bookingId}`)
            }
          />
        </View>
        <Text style={{ ...styles.title, marginBottom: 5 }}>
          {booking.guestName}
        </Text>
        <Text>Booking ID: {booking.bookingId}</Text>
        <Text>Room Number: {booking.roomNumber}</Text>
        <Text>Check-in: {booking.checkInDate}</Text>
        <Text>Check-out: {booking.checkOutDate}</Text>
        <Text
          style={{
            color: getStatusColor(booking.status),
            marginTop: 5,
            fontWeight: "bold",
          }}
        >
          {booking.status}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
  },
  cardContent: {
    position: "relative",
  },
  infoIconContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
