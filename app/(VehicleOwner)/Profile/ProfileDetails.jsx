// ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../../constants/Colors';


const ProfileDetails = () => {
   
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactno, setContactno] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  let data = {name:"Shaf",email:"Shaf@live.com",contactno:"0777123456",licenceno:"B7125487",province:"Eastern"}
  const pickImage = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
  };

  const handleSave = () => {
    // Handle save functionality here
    alert('Profile information saved!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
      <View style={styles.profilePictureContainer}>
        
      <Image source={require("../../../assets/images/Shop/shop.png")} style={styles.profilePicture} />
          
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={data.name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={data.email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contact No.</Text>
        <TextInput
          style={styles.input}
          value={data.contactno}
          onChangeText={setContactno}
          placeholder="Enter your number"
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Licence No.</Text>
        <TextInput
          style={styles.input}
          value={data.licenceno}
          onChangeText={setName}
          placeholder="Enter your Licence No"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Province</Text>
        <TextInput
          style={styles.input}
          value={data.province}
          onChangeText={setName}
          placeholder="Enter your Province"
        />
      </View>
      <LinearGradient colors={[Colors.PRIMARY, Colors.PRIMARY+"AA"]}
          start={{x:1, y:0}}
          end={{x:0, y:0}} 
          style={{borderRadius:10}}>
      <Text style={{fontSize:20,padding:10,textAlign:"center",color:"white"}}  onPress={handleSave} >Edit</Text>
      </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.PRIMARY+"AA",
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profilePictureContainer: {
    // backgroundColor:Colors.PRIMARY,
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderWidth:2,
    // borderColor:"black",
    borderRadius: 50,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#a1a1a1',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  card: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 2,
    elevation: 3,
    
  },
});

export default ProfileDetails;
