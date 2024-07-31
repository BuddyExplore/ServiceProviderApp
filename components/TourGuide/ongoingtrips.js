import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image } from 'react-native';

const ongoingTrips = [
  { id: '1', title: 'T003', details: 'Trip to Ella' },
  { id: '2', title: 'T004', details: 'Trip to Nuwara eliya' },
];

const OngoingTrips = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require("../assets/buddy.jpg")}
          style={{ height: 270, width: "100%" }}
          resizeMethod="resize"
          blurRadius={1}
        />
        <View style={styles.container}>
      <Text style={styles.title}>Ongoing Trips</Text>
      <FlatList
        data={ongoingTrips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.assignment}>
            <Text style={styles.assignmentTitle}>{item.title}</Text>
            <Text>{item.details}</Text>
          </View>
        )}
      />
    </View>
      </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  assignment: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 8,
    borderRadius: 8,
    elevation: 1,
  },
  assignmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OngoingTrips;
