// ProfileScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import wasri from "../../../assets/images/TourGuide/wasri.jpg";
import Header from "../../../components/TourGuide/header";

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("Wasri Nama");
  const [email, setEmail] = useState("namawasri@icloud.com");
  const [contactno, setContactno] = useState("0758860234");
  // const [address, setAddress] = useState('234 Main St, Colombo 05');
  const [profilePicture, setProfilePicture] = useState(null);

  const pickImage = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

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
    alert("Profile information saved!");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header title="Profile" navigation={navigation} /> */}
      <View style={styles.page}>
        <View style={styles.card}>
          <View style={styles.header}></View>
          <View style={styles.profilePictureContainer}>
            <Image source={wasri} style={styles.profilePicture} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contact No.</Text>
            <TextInput
              style={styles.input}
              value={contactno}
              onChangeText={setContactno}
              placeholder="Enter your number"
              keyboardType="number-pad"
            />
          </View>
          <Button title="Save" onPress={handleSave} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e1e1e1",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#a1a1a1",
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
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  card: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 1,
  },
  page: {
    padding: 16,
  },
});

export default ProfileScreen;
