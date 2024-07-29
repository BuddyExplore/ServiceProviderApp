import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import * as ImagePicker from 'expo-image-picker';

const AddRoomModal = ({ isVisible, onClose, onAddRoom }) => {
  const [roomNumber, setRoomNumber] = useState('');
  const [roomType, setRoomType] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState(null);

  const handleAddRoom = () => {
    if (roomNumber && roomType && price) {
      onAddRoom({ roomNumber, roomType, price, description, img });
      onClose();
    } else {
      alert('Please fill in all required fields');
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>Add New Room</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Room Number"
          value={roomNumber}
          onChangeText={setRoomNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Room Type"
          value={roomType}
          onChangeText={setRoomType}
        />
        <TextInput
          style={styles.input}
          placeholder="Price per Night"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Description (optional)"
          value={description}
          onChangeText={setDescription}
        />

        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <Text style={styles.imagePickerText}>Pick an image</Text>
        </TouchableOpacity>
        {img && <Image source={{ uri: img }} style={styles.image} />}

        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={onClose} />
          <Button title="Add Room" onPress={handleAddRoom} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  imagePicker: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  imagePickerText: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default AddRoomModal;
