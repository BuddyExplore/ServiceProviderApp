import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/TourGuide/header";

const notifications = [
  {
    id: "1",
    title: "New Assignment",
    description: "You have a new assignment due next week.",
  },
  {
    id: "2",
    title: "Payment Reminder",
    description: "Your payment is due tomorrow.",
  },
  {
    id: "3",
    title: "Trip Update",
    description: "Your trip details have been updated.",
  },
  // Add more notifications here
];

const NotificationsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        backButtonShown="flex"
        notificationButtonShown="none"
        title="Notifications"
        navigation={navigation}
      />

      <View style={styles.page}>
        <Text style={styles.title}>Notifications</Text>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.notificationCard}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationDescription}>
                {item.description}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notificationCard: {
    backgroundColor: "lightblue",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  notificationDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  page: {
    padding: 20,
  },
});

export default NotificationsScreen;
