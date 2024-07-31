import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image } from 'react-native';

const completedtrips = [
  { id: '1', title: 'T005', details: 'Trip to Galle' },
  { id: '2', title: 'T006', details: 'Trip to Jaffna' },
];

const CompletedTrips = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require("../assets/buddy.jpg")}
          style={{ height: 270, width: "100%" }}
          resizeMethod="resize"
          blurRadius={1}
        />
        <View style={styles.container}>
      <Text style={styles.title}>Completed Trips</Text>
      <FlatList
        data={completedtrips}
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
    fontSize: 20,
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

export default CompletedTrips;
