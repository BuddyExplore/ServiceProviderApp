import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ReviewCard from "../../../components/Hotel/ReviewCard";
import Header from "../../../components/Hotel/Header"

const reviewsData = [
  {
    "id": 1,
    "guestName": "John Doe",
    "rating": 4,
    "review": "Great service and clean rooms!",
    "date": "2024-07-25"
  },
  {
    "id": 2,
    "guestName": "Jane Smith",
    "rating": 5,
    "review": "Excellent experience, highly recommend!",
    "date": "2024-07-24"
  },
  {
    "id": 3,
    "guestName": "Robert Brown",
    "rating": 3,
    "review": "Good, but the air conditioning was not working well.",
    "date": "2024-07-23"
  },
  {
    "id": 4,
    "guestName": "Emily Davis",
    "rating": 5,
    "review": "Amazing stay! Will come back again.",
    "date": "2024-07-22"
  },
  {
    "id": 5,
    "guestName": "Michael Wilson",
    "rating": 2,
    "review": "Room was not clean on arrival.",
    "date": "2024-07-21"
  }
];

export default function ReviewsScreen() {
  return (
    <>
    <Header subText={"Your"} mainText={"Reviews"} />
    <View style={styles.container}>
      <FlatList
        data={reviewsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ReviewCard review={item} />}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
});
