import { View, Text, TextInput, Button, StyleSheet , Image , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import Header from '../../components/Shop/AddItem/Header';
import AddItemCancel from "../../components/Shop/AddItem/AddItemCancel"
import { Colors } from '../../constants/Colors';

const AddItems = () => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // Request permission to access the media library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need permission to access your images!');
          return;
        }
    
        // Launch the image picker
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
        });

    
        if (!result.canceled) {
            // Handle image data
            if (result.assets && result.assets.length > 0) {
              const selectedImage = result.assets[0];
              setImage(selectedImage.uri); // Set the selected image URI
            } else {
              Alert.alert('Error', 'No image selected');
            }
          } else {
            Alert.alert('Canceled', 'Image selection canceled');
          }
      };

  return (
    <View>
        <Header />
        <View style={styles.container}>
            
        <Text style={{
            fontSize: 14,
            marginBottom: 5,
            color: Colors.FOURTH,
            fontWeight: 'bold'
        }}>
            Item name
        </Text>
        <TextInput
            style={styles.input}
            placeholder="Item Name"
            value={itemName}
            onChangeText={setItemName}
        />
        <Text style={{
            fontSize: 14,
            marginBottom: 5,
            color: Colors.FOURTH,
            fontWeight: 'bold'
        }}>
            Item Description
        </Text>
        <TextInput
            style={styles.input}
            placeholder="Item Description"
            value={itemDescription}
            onChangeText={setItemDescription}
        />
        <Text style={{
            fontSize: 14,
            marginBottom: 5,
            color: Colors.FOURTH,
            fontWeight: 'bold'
        }}>
            Item Price
        </Text>
        <TextInput
            style={styles.input}
            placeholder="Item Price"
            value={itemPrice}
            onChangeText={setItemPrice}
            keyboardType="numeric"
        />
        <Text style={{
            fontSize: 14,
            marginBottom: 5,
            color: Colors.FOURTH,
            fontWeight: 'bold'
        }}>
            Item Image
        </Text>
        {image ? (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      ) : (
        <Image
        source={require('../../assets/images/Shop/product.png')} 
        style={styles.image}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Choose Image from Gallery</Text>
      </TouchableOpacity>
      <AddItemCancel />
        </View>
    </View>
  )
}

export default AddItems


const styles = StyleSheet.create({
    container: {
      height: '100%',
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 10,
        resizeMode: 'cover',
        
      },
      button: {
        backgroundColor: Colors.THIRD, // Background color
        paddingVertical: 10, // Vertical padding
        paddingHorizontal: 20, // Horizontal padding
        borderRadius: 5, // Rounded corners
        alignItems: 'center',
        marginBottom: 20
      },
      buttonText: {
        color: '#FFFFFF', // Text color
        fontSize: 16, // Text size
        fontWeight: 'bold', // Text weight
      },
  });