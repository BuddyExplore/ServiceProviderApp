// MessagesScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MessageItem from '../../components/TourGuide/MessageItem';
import Header from "../../components/TourGuide/header";

const MessagesScreen = ({ navigation }) => {
  const messages = [
    { id: '1', sender: 'Usama', text: 'Hello! How are you?', timestamp: '2024-07-15 10:00 AM' },
    { id: '2', sender: 'Wasri', text: 'Hi! Can we meet tomorrow?', timestamp: '2024-07-15 10:15 AM' },
    { id: '3', sender: 'Iflal', text: 'Don’t forget our meeting!', timestamp: '2024-07-15 10:30 AM' },
  ];

  const renderMessage = ({ item }) => (
    <MessageItem sender={item.sender} text={item.text} timestamp={item.timestamp} />
  );

  return (
    <SafeAreaView style={styles.container}>
       <Header title="Messages" navigation={navigation} /> 
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
        <Button title="Compose" onPress={() => { /* Handle compose message */ }} />
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "gray",
  },
  list: {
    padding: 16,
    
  },
});

export default MessagesScreen;
