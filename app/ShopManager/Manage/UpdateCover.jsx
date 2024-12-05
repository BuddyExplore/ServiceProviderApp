import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import BASE_URL from '../../../constants/globals';

const UpdateCover = () => {
  const router = useRouter();
  const { itemID, shopID } = useLocalSearchParams();

  const [coverImage, setCoverImage] = useState('');
  const [coverImageName, setCoverImageName] = useState('');
  const [coverImageType, setCoverImageType] = useState('');

  const handleSubmit = async () => {
    if(!coverImage) {
      alert("Upload a new cover image !");
      return;
    }
    
    const payload = new FormData();
    payload.append('coverImage', {
      uri: coverImage,
      name: coverImageName, // Set a name for the file
      type: coverImageType, // Adjust based on the file type
    });

    try {
      const response = await fetch(`${BASE_URL}/api/travel/item/updateCover/${itemID}`, {
        method: 'PUT',
        header: {
          'Content-Type' : 'multipart/form-data'
        },
        body: payload
      });
  
      console.log('Registration Successful:');
      alert('Cover image updated successfully!');
      router.replace(
        `./EditItem?itemID=${itemID}&shopID=${shopID}`,
        undefined,
        { shallow: true }
      )
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Something went wrong. Please try again.');
    }

  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1], // Adjust based on preferred dimensions
      quality: 1,
    });

    if (!result.canceled) {
      setCoverImage(result.assets[0].uri); // Save the image URI
      setCoverImageName(result.assets[0].fileName); // Save the image URI
      setCoverImageType(result.assets[0].mimeType); // Save the image URI
    }
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.imageContainer}>
        {coverImage && <Image source={{ uri: coverImage }} style={styles.image} />}
        {!coverImage && (
          <TouchableOpacity style={styles.imageUpload} onPress={pickImage}>
            <AntDesign name="clouduploado" size={24} color="#A5A5A5" />
            <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '500', color: "#A5A5A5"}}>Upload new cover image</Text>
          </TouchableOpacity>
        )}
        </View>
        </View>

        {coverImage &&
        <View style={{alignItems: 'center'}}> 
          <TouchableOpacity style={styles.removeImage} onPress={() => setCoverImage(null)}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: '500'}}>Remove image</Text>
          </TouchableOpacity>
        </View>
        }

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.cancelBtn}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextBtn} onPress={handleSubmit}>
          <Text style={styles.nextBtnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UpdateCover

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 10,
    marginTop: 100
  },
  imageUpload: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  removeImage: {
    backgroundColor: 'red',
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 7,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    gap: 30,
    marginTop: 20
    // backgroundColor: 'green',
  },
  cancelBtn: {
    backgroundColor: Colors.DANGER,
    borderRadius: 32,
    width: '40%'
  },
  cancelBtnText: {
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600'
  },
  nextBtn: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 32,
    padding: 10,
    width: '40%'
  },
  nextBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600'
  }
})