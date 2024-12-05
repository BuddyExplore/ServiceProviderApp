import React, { useContext, useState } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Colors} from '../../../constants/Colors';
import BASE_URL from '../../../constants/globals';
import { router } from 'expo-router';
import {AuthContext} from '../../../context/AuthContext';

export default function RegisterShopDetails() {
  const { user } = useContext(AuthContext);

  const [coverImage, setCoverImage] = useState(null);
  const [coverImageName, setCoverImageName] = useState('');
  const [coverImageType, setCoverImageType] = useState('');

  const [businessCertificate, setBusinessCertificate] = useState(null);
  const [businessCertificateName, setBusinessCertificateName] = useState('');
  const [businessCertificateType, setBusinessCertificateType] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  // Open image picker
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3], // Adjust based on preferred dimensions
      quality: 1,
    });

    if (!result.canceled) {
      setCoverImage(result.assets[0].uri); // Save the image URI
      setCoverImageName(result.assets[0].fileName); // Save the image URI
      setCoverImageType(result.assets[0].mimeType); // Save the image URI
    }
  };

  const pickBusinessCertificate = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    });

    if (!result.canceled) {
      setBusinessCertificate(result.assets[0].uri); // Save the image URI
      setBusinessCertificateName(result.assets[0].fileName);
      setBusinessCertificateType(result.assets[0].mimeType);
    }
  };

  // Handle form changes
  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  // Submit to backend
  const handleSubmit = async () => {
    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('address', formData.address);
    payload.append('city', formData.address);
    payload.append('description', formData.description);
    payload.append('phoneNo', formData.phoneNo);
    payload.append('email', formData.email);
    payload.append('shopOwnerID', user.id);
    payload.append('coverImage', {
      uri: coverImage,
      name: coverImageName, // Set a name for the file
      type: coverImageType, // Adjust based on the file type
    });
    payload.append('businessCertificate', {
      uri: businessCertificate,
      name: businessCertificateName, // Set a name for the file
      type: businessCertificateType, // Adjust based on the file type
    });

    try {
      const response = await fetch(`${BASE_URL}/api/travel/shop/register`, {
        method: 'POST',
        header: {
          'Content-Type' : 'multipart/form-data'
        },
        body: payload
      });
  
      console.log('Registration Successful:');
      alert('Shop registered successfully!');
      router.replace('../HomeTabs/ManageTab', undefined, { shallow: true });
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={{alignItems: 'center'}}>
      <View style={styles.imageContainer}>
      {coverImage && <Image source={{ uri: coverImage }} style={styles.image} />}
      {!coverImage && (
        <TouchableOpacity style={styles.imageUpload} onPress={pickImage}>
          <AntDesign name="clouduploado" size={24} color="#A5A5A5" />
          <Text style={{color: "#A5A5A5"}}>Upload cover image</Text>
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

      <View>
      <Text style={styles.label}>Shop name</Text>
      <TextInput
        placeholder="Enter shop name"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
        style={styles.input}
      />
      </View>

      <View>
      <Text style={styles.label}>Shop address</Text>
      <TextInput
        placeholder="Enter shop address"
        value={formData.address}
          onChangeText={(value) => handleInputChange('address', value)}
        style={styles.input}
      />
      </View>

      <View>
      <Text style={styles.label}>Business registration certificate </Text>
      {/* <TextInput
        placeholder="Upload certificate"
        value={formData.businessCertificate}
        onChangeText={(value) => handleInputChange('description', value)}
        style={styles.input}
      /> */}
      <TouchableOpacity onPress={pickBusinessCertificate} style={{...styles.input, height: 45, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{color: "#A5A5A5"}}>{businessCertificateName ? businessCertificateName : "Upload certificate"}</Text>
        <AntDesign name="clouduploado" style={{marginRight: 10}} size={24} color="#A5A5A5" />
      </TouchableOpacity>
      </View>

      <View>
      <Text style={styles.label}>Contact number</Text>
      <TextInput
        placeholder="Enter shop contact number"
        value={formData.phoneNo}
        onChangeText={(value) => handleInputChange('phoneNo', value)}
        style={styles.input}
      />
      </View>

      <View>
      <Text style={styles.label}>Shop email</Text>
      <TextInput
        placeholder="Enter shop email"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
        style={styles.input}
      />
      </View>

      <View>
      <Text style={styles.label}>Shop description</Text>
      <TextInput
        placeholder="Description"
        value={formData.description}
        onChangeText={(value) => handleInputChange('description', value)}
        style={styles.input}
        multiline={true}
        numberOfLines={5} 
        textAlignVertical='top'
      />
      </View>
      </ScrollView>
      
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => router.back()}>
          <Text style={styles.cancelBtnText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextBtn} onPress={handleSubmit}>
          <Text style={styles.nextBtnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  imageContainer: {
    width: 200,
    height: 150,
    marginVertical: 20,
    borderRadius: 10,
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
  label:{
    fontSize: 16,
    fontWeight: '500'
  },  
  input: {
    width: '100%',
    padding: 10,
    paddingLeft: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#F6F6F6'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    position: 'fixed',
    bottom: 0,
    gap: 30,
  },
  cancelBtn: {
    backgroundColor: '#fff',
    borderRadius: 32,
    width: '40%'
  },
  cancelBtnText: {
    color: Colors.PRIMARY,
    backgroundColor: '#fff',
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
});