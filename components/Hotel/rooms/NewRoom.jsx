import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const NewRoom = ({room}) => {
  
  return (
    <TouchableOpacity style={styles.roomCard}>
      <Text style={styles.roomNumber}>Room {room.roomNumber}</Text>
      <Text style={styles.roomType}>Type: {room.roomType}</Text>
      <Text style={styles.price}>Price: ${room.price} per night</Text>
      {room.description && <Text style={styles.description}>{room.description}</Text>}
      {room.img && <Image source={{ uri: room.img }} style={styles.roomImage} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roomCard: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  roomNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roomType: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 14,
    color: '#555',
  },
  description: {
    fontSize: 12,
    color: '#777',
  },
  roomImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default NewRoom;
