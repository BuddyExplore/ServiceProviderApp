import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const icons = {
  booking: <MaterialIcons name="event-available" size={24} color="green" />,
  maintenance: <MaterialIcons name="build" size={24} color="orange" />,
  feedback: <FontAwesome name="comment" size={24} color="#0A89FF" />,
  staff: <Ionicons name="people" size={24} color="purple" />,
  alert: <Ionicons name="alert-circle" size={24} color="red" />,
};

const NotificationCard = ({ notification }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>{icons[notification.type]}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.message}>{notification.message}</Text>
        <Text style={styles.timestamp}>
          {new Date(notification.timestamp).toLocaleString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  timestamp: {
    fontSize: 12,
    color: "#999",
  },
});

export default NotificationCard;
