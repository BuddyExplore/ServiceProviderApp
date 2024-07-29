import { View, FlatList, Text , ScrollView, StyleSheet} from 'react-native'
import React, { useState, useEffect }from 'react'
import Header from "../../../components/Hotel/Header"
import NotificationCard from "../../../components/Hotel/NotificationCard"

export default function shop() {
  const notificationsData = [
    {
      "id": 1,
      "type": "booking",
      "title": "New Booking",
      "message": "Room 305 has been booked by John Doe.",
      "timestamp": "2024-07-27T10:00:00Z"
    },
    {
      "id": 2,
      "type": "maintenance",
      "title": "Maintenance Required",
      "message": "Air conditioning in Room 210 needs repair.",
      "timestamp": "2024-07-27T11:30:00Z"
    },
    {
      "id": 3,
      "type": "feedback",
      "title": "New Feedback",
      "message": "Guest Jane Smith left a review: 'Excellent service!'",
      "timestamp": "2024-07-27T12:45:00Z"
    },
    {
      "id": 4,
      "type": "staff",
      "title": "Staff Meeting",
      "message": "Staff meeting scheduled for 3 PM in the conference room.",
      "timestamp": "2024-07-27T13:00:00Z"
    },
    {
      "id": 5,
      "type": "alert",
      "title": "Security Alert",
      "message": "Suspicious activity detected in the parking lot.",
      "timestamp": "2024-07-27T14:15:00Z"
    }
  ];

  return (
    <View>
      <Header subText={"Your"} mainText={"Notifications"}/>

        <View style={styles.container}>
        <FlatList
          data={notificationsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <NotificationCard notification={item} />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f8f8f8',
    padding: 10,
  },
});