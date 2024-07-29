import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const getStars = (rating) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesome
        key={i}
        name="star"
        size={16}
        color={i <= rating ? "#FFD700" : "#ccc"}
      />
    );
  }
  return stars;
};

const ReviewCard = ({ review }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.guestName}>{review.guestName}</Text>
      <View style={styles.rating}>{getStars(review.rating)}</View>
      <Text style={styles.reviewText}>{review.review}</Text>
      <Text style={styles.date}>{new Date(review.date).toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  guestName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default ReviewCard;
