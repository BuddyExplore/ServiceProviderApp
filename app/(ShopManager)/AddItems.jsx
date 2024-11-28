import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Header from "../../components/Shop/AddItem/Header";
import AddItemCancel from "../../components/Shop/AddItem/AddItemCancel";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";
import axios from "axios";

const AddItems = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [image, setImage] = useState(null);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("");
  const [isAvailable, setIsAvailable] = useState("true");

  const router = useRouter();

  const handleAddItem = async () => {
    try {
      const formData = new FormData();
      formData.append("name", itemName);
      formData.append("description", itemDescription);
      formData.append("price", itemPrice);
      formData.append("item_count", count);
      formData.append("item_category", category);
      formData.append("is_available", isAvailable);
      if (image) {
        const localUri = image;
        const filename = localUri.split("/").pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image`;
        formData.append("image", { uri: localUri, name: filename, type });
      }

      // console.log(formData);
      const data = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        item_count: count,
        item_category: category,
        is_available: isAvailable,
        shop_id: 1,
      };

      console.log(data);
      const response = await axios.post(
        "http://10.22.162.81:5001/api/travel/item/addItem",
        data
      );

      console.log(response);

      if (response.data.code === "00" || response.data.code === "10") {
        Alert.alert("Success", "Created Item");
        router.replace("./manage");
      } else {
        Alert.alert("Error", response.data.message || "Failed to create item");
      }
    } catch (error) {
      console.error("Error creating item:", error);
      Alert.alert("Error", "An error occurred while creating the item");
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need permission to access your images!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        const selectedImage = result.assets[0];
        setImage(selectedImage.uri);
      } else {
        Alert.alert("Error", "No image selected");
      }
    } else {
      Alert.alert("Canceled", "Image selection canceled");
    }
  };

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Text style={styles.label}>Item name</Text>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={itemName}
          onChangeText={setItemName}
        />
        <Text style={styles.label}>Item Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Item Description"
          value={itemDescription}
          onChangeText={setItemDescription}
        />
        <Text style={styles.label}>Item Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Item Price"
          value={itemPrice}
          onChangeText={setItemPrice}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Item Quantity</Text>
        <TextInput
          style={styles.input}
          placeholder="Item Quantity"
          value={count}
          onChangeText={setCount}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Item Category</Text>
        <TextInput
          style={styles.input}
          placeholder="Item Category"
          value={category}
          onChangeText={setCategory}
        />
        <Text style={styles.label}>Item is available</Text>
        <TextInput
          style={styles.input}
          placeholder="true or false"
          value={isAvailable}
          onChangeText={setIsAvailable}
        />
        <Text style={styles.label}>Item Image</Text>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Image
            source={require("../../assets/images/Shop/product.png")}
            style={styles.image}
          />
        )}
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Choose Image from Gallery</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1} onPress={handleAddItem}>
            <Text style={styles.buttonText}>Add Item</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => router.push("../(ShopManager)/manage")}
          >
            <Text style={styles.buttonText1}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddItems;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: Colors.FOURTH,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
    resizeMode: "cover",
  },
  button: {
    backgroundColor: Colors.THIRD,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  button1: {
    backgroundColor: Colors.PRIMARY,
    width: "45%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  button2: {
    backgroundColor: "#E8E8E8",
    width: "45%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText1: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
