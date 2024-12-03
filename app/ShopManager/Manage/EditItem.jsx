import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors } from '../../../constants/Colors';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import AntDesign from '@expo/vector-icons/AntDesign';
import BASE_URL from '../../../constants/globals';
import axios from 'axios';

const EditItem = () => {
  const router = useRouter();
  const { id, name, price, availability, category, itemCount, description} = useLocalSearchParams();

  const [itemId, setItemId] = useState(null);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemAvailability, setItemAvailability] = useState('In Stock');
  const [itemCategory, setItemCategory] = useState('');
  const [itemCountState, setItemCountState] = useState(0);
  const [itemDescription, setItemDescription] = useState('');
  const [itemCoverImage, setItemCoverImage] = useState('');

  useEffect(() => {
    setItemId(id);
    setItemName(name || '');
    setItemPrice(price || '');
    setItemAvailability(availability || 'In Stock');
    setItemCategory(category || '');
    setItemCountState(itemCount || 0);
    setItemDescription(description || '');
    
    const fetchCover = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/travel/item/coverImage/${id}`);
        const cover_image = response.data;
        setItemCoverImage(cover_image || '');
      } catch (error) {
        console.error('Error fetching cover image:', error);
        alert('Failed to fetch cover image. Please try again.');
      }
    }

    fetchCover();

  }, [id, name, price, availability, category, itemCount, description]);

  const handleUpdateCover = () => {
    router.push({
      pathname: './UpdateCover',
      params: {
        id: parseInt(itemId)
      }
    })
  }
  
  const handleSubmit = async () => {
    const itemRequest = {
      id: parseInt(itemId),
      name: itemName, 
      description: itemDescription, 
      price: parseFloat(itemPrice), 
      item_count: parseInt(itemCountState), 
      item_category: itemCategory, 
      is_available: itemAvailability === 'In Stock',
    };
    
    console.log(itemRequest);

    try {
      const response = await axios.put(`${BASE_URL}/api/travel/item/update/${parseInt(itemId)}`, itemRequest, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Success:', response.data);
      alert("Item updated successfully!");
      router.back(); 
    } catch (error) {
      // Handle errors from the server response
      if (error.response) {
        // The request was made and the server responded with a status code outside of the range 2xx
        console.error('Error Response:', error.response.data);
        alert(`Error: ${error.response.data || "Failed to update item. Please try again."}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error Request:', error.request);
        alert("No response received from server. Please check your connection.");
      } else {
        // Something else caused an error
        console.error('Error Message:', error.message);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <View style={styles.container}>
    
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{alignItems: 'center'}}>
      <View style={styles.imageContainer}>
        {itemCoverImage && <Image source={{uri : `${BASE_URL}/${itemCoverImage}`}} style={styles.image} />} 
      </View>
    </View>

    <View style={{alignItems: 'center'}}> 
    <TouchableOpacity style={styles.removeImage} onPress={handleUpdateCover}>
      <Text style={{color: '#fff', fontSize: 15, fontWeight: '500'}}>Update image</Text>
    </TouchableOpacity>
    </View>
    
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>Item Name</Text>
      <TextInput value={itemName} style={styles.input} 
      onChangeText={setItemName}/>
    </View>
    
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>Item Price</Text>
      <TextInput value={itemPrice} style={styles.input} 
      onChangeText={setItemPrice}/>
    </View>
    
    <View style={styles.fieldSelect}>
      <Text style={styles.fieldLabel}>Availability</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        value={itemAvailability}
        placeholder={{label: 'Select availability'}}
        onValueChange={(value) => setItemAvailability(value)}
        items={[
          { label: 'In Stock', value: 'In Stock' },
          { label: 'Out of Stock', value: 'Out of Stock' },
          ]}
      />
    </View>
    
    <View style={styles.fieldSelect}>
      <Text style={styles.fieldLabel}>Category</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        value={itemCategory}
        placeholder={{label: 'Choose a category'}}
        onValueChange={(value) => setItemCategory(value)}
        items={[
          { label: 'Fashion', value: 'Fashion' },
          { label: 'Souvenirs', value: 'Souvenirs' },
          { label: 'Decor', value: 'Decor' },
          { label: 'Books', value: 'Books' },
          { label: 'Other', value: 'Other' },
          ]}
      />
    </View>

    <View style={styles.field}>
      <Text style={styles.fieldLabel}>Item Count</Text>
      <TextInput value={itemCountState} style={styles.input} 
      onChangeText={setItemCountState}/>
    </View>
    
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>Item Description</Text>
      <TextInput onChangeText={setItemDescription}
      value={itemDescription} style={styles.input} multiline={true}/>
    </View>
    </ScrollView>
    
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

export default EditItem

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
    backgroundColor: Colors.SIXTH,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 7,
  },
  field: {
    paddingHorizontal: 12,
    marginTop: 10,
  },
  fieldSelect: {
    paddingHorizontal: 12,
    marginTop: 10,
    marginBottom: 0
  },
  input: {
    width: '100%',
    padding: 10,
    paddingLeft: 15,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#F6F6F6'
  },
  fieldLabel:{
    fontSize: 15
  },
  fieldValue: {
    fontSize: 17,
    fontWeight: '600'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    gap: 30,
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
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    paddingRight: 30, // to ensure the text is not overlapping with the icon
  },
});