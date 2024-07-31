import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Handle the feedback submission logic here
    alert('Thank you for your feedback!');
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Feedback</Text>
     
      <Text style={styles.label}>Rating</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Text
            key={star}
            style={star <= rating ? styles.starSelected : styles.star}
            onPress={() => setRating(star)}
          >
            ★
          </Text>
        ))}
      </View>
      <TextInput
        style={styles.textArea}
        placeholder="Your Feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    color: "gray",
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  star: {
    fontSize: 24,
    color: '#ccc',
    marginRight: 8,
  },
  starSelected: {
    fontSize: 24,
    color: '#f1c40f',
    marginRight: 8,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
 
});

