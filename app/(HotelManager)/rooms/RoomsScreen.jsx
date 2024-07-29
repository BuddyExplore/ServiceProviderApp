import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import AddRoomModal from './AddRoomModal';

const initialRoomsData = [
  { id: 1, roomNumber: '101', roomType: 'Single', price: '100', description: 'A cozy single room', image: null },
  { id: 2, roomNumber: '102', roomType: 'Double', price: '150', description: 'A spacious double room', image: null },
];

const RoomsScreen = () => {
  const [rooms, setRooms] = useState(initialRoomsData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddRoom = (newRoom) => {
    setRooms([...rooms, { ...newRoom, id: rooms.length + 1 }]);
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Room" onPress={() => setIsModalVisible(true)} />
      
      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.roomCard}>
            <Text style={styles.roomNumber}>Room {item.roomNumber}</Text>
            <Text style={styles.roomType}>Type: {item.roomType}</Text>
            <Text style={styles.price}>Price: ${item.price} per night</Text>
            {item.description && <Text style={styles.description}>{item.description}</Text>}
            {item.image && <Image source={{ uri: item.image }} style={styles.roomImage} />}
          </View>
        )}
      />
      
      <AddRoomModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddRoom={handleAddRoom}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
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

export default RoomsScreen;
