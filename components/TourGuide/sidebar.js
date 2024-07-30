import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sidebar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BuddyExplore</Text>
      <Text style={styles.item}>Dashboard</Text>
      <Text style={styles.item}>Assignments</Text>
      <Text style={styles.item}>Messages/Chat</Text>
      <Text style={styles.item}>Profile</Text>
      <Text style={styles.item}>Payments</Text>
      <Text style={styles.item}>Feedback</Text>
      <Text style={styles.item}>Support</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    marginVertical: 10,
  },
});

