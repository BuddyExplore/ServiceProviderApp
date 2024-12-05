import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import {Colors} from '../../../constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useLocalSearchParams, useRouter } from 'expo-router';
import BASE_URL from '../../../constants/globals';

const AddItem = () => {
  const router = useRouter();

  const { shopID } = useLocalSearchParams();

  const [coverImage, setCoverImage] = useState(null);
  const [coverImageName, setCoverImageName] = useState('');
  const [coverImageType, setCoverImageType] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

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

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('description', formData.description);
    payload.append('price', formData.price);
    payload.append('itemCount', formData.itemCount);
    payload.append('shopID', shopID.toString());
    payload.append('category', formData.category);
    payload.append('coverImage', {
      uri: coverImage,
      name: coverImageName, // Set a name for the file
      type: coverImageType, // Adjust based on the file type
    });

    try {
      const response = await fetch(`${BASE_URL}/api/travel/item/add`, {
        method: 'POST',
        body: payload,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const result = await response.json();
      console.log('Success:', result);
      Alert.alert("Item added successfully !");
      router.replace(
        `./ShopDetails?shopID=${shopID}`,
        undefined,
        { shallow: true }
      )
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text>AddItem</Text> */}
      {/* <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Football', value: 'football' },
          { label: 'Baseball', value: 'baseball' },
          { label: 'Hockey', value: 'hockey' },
          ]}
      /> */}
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
      <Text style={styles.label}>Item Name</Text>
      <TextInput
        placeholder="Enter item name"
        value={formData.email}
        onChangeText={(value) => handleInputChange('name', value)}
        style={styles.input}
      />
      </View>

      <View>
      <Text style={styles.label}>Item Price</Text>
      <TextInput
        placeholder="Enter item price"
        value={formData.email}
        onChangeText={(value) => handleInputChange('price', value)}
        style={styles.input}
      />
      </View>

      <View>
      <Text style={styles.label}>Item Category</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          placeholder={{label: 'Choose a category'}}
          onValueChange={(value) => handleInputChange('category', value)}
          items={[
            { label: 'Fashion', value: 'Fashion' },
            { label: 'Souvenirs', value: 'Souvenirs' },
            { label: 'Decor', value: 'Decor' },
            { label: 'Books', value: 'Books' },
            { label: 'Other', value: 'Other' },
            ]}
        />
      </View>

      <View>
      <Text style={styles.label}>Item Count</Text>
      <TextInput
        placeholder="Enter item count"
        value={formData.email}
        onChangeText={(value) => handleInputChange('itemCount', value)}
        style={styles.input}
      />
      </View>

      <View>
      <Text style={styles.label}>Item Description</Text>
      <TextInput
        placeholder="Enter Description"
        value={formData.description}
        onChangeText={(value) => handleInputChange('description', value)}
        style={styles.input}
        multiline={true}
        numberOfLines={5}
        textAlignVertical='top'
      />
      </View>

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

export default AddItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
    gap: 30,
    position: 'absolute',
    bottom: 10,
    marginLeft: 12,
    // backgroundColor: 'green',
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
})

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    paddingRight: 30, // to ensure the text is not overlapping with the icon
  },
});