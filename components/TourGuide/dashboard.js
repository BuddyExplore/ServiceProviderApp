import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Upcoming Assignments</Text>
        {/* Add code to list assignments */}
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ongoing Assignments</Text>
        {/* Add code for ongoing assignments */}
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Completed Assignments</Text>
        {/* Add code for completed assignments */}
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Notifications</Text>
        {/* Add code for notifications */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
