import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import axios from "axios";

export default function ItemDetails({
  prefernce,
  openEdit,
  nameOfItem,
  priceOfItem,
  deletedItem,
}) {
  const handleEdit = (itemName) => {
    openEdit(1);
  };

  const handleDelete = (itemName) => {
    //Delete function
  };

  const handleDeleteItem = async () => {
    const data = prefernce.id;
    const response = await axios.delete(
      `http://10.22.162.81:5001/api/travel/item/deleteItem/${data}`
    );

    console.log(response);
    deletedItem(1);
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: "#F0EDED",
          width: "100%",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
          borderRadius: 12,
        }}
      >
        <Image source={prefernce.img} style={styles.itemImg} />
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text style={styles.itemData}>{nameOfItem}</Text>
        <Text style={styles.itemData}>LKR {priceOfItem}.00</Text>
      </View>

      <Text style={styles.itemAvailability}>In-Stock</Text>

      <Text style={styles.label}>{prefernce.description}</Text>

      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={[styles.editButton, styles.buttonClose]}
          onPress={handleEdit}
          // onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.buttonTxt}>Edit Item</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.deleteButton]}
          onPress={handleDeleteItem}
          // onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.buttonTxt}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemName: {
    fontSize: 28,
    fontWeight: "bold",
  },
  itemImg: {
    width: 200,
    height: 200,
  },
  label: {
    fontSize: 16,
    // fontWeight: 'bold',
    marginBottom: 20,
    color: "grey",
  },
  itemData: {
    fontSize: 23,
    fontWeight: "bold",
  },
  itemAvailability: {
    color: Colors.SECOND,
    marginBottom: 20,
  },
  backButton: {
    width: 50,
    backgroundColor: "#F0EDED",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  editButton: {
    backgroundColor: Colors.PRIMARY,
    height: 40,
    width: 130,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  buttonTxt: {
    fontSize: 21,
    color: "white",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#DC143C",
    height: 40,
    width: 130,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
    fontSize: 21,
    color: "white",
    fontWeight: "bold",
  },
});
