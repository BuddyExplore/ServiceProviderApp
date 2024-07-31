import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../../components/TourGuide/Backbutton';
import { router } from 'expo-router';
import buddy from '../../../assets/images/TourGuide/buddy.jpg';
import Header from '../../../components/TourGuide/header';
import { SafeAreaView } from 'react-native-safe-area-context';


const upcomingTrips = [
  { id: '1', title: 'T001', details: 'Trip to Sigiriya' },
  { id: '2', title: 'T002', details: 'Trip to hatton' },
];

const UpcomingTrips= ({navigation}) => {

  return (
    <ScrollView >
    <Image
      source={buddy}
      style={{ height: 270, width: "100%", marginBottom: 16 }}
      resizeMethod="resize"
      blurRadius={1}
    />
    <View style={styles.container}>
      <View>
        <BackButton handlePress={()=> router.push('dashboard')} />
      </View>
      <Text style={styles.title}>Upcoming Trips</Text>
      <FlatList
        data={upcomingTrips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.assignment}>
            <Text style={styles.assignmentTitle}>{item.title}</Text>
            <Text>{item.details}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default UpcomingTrips;