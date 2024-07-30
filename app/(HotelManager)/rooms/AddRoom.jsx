import { Pressable, StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useRouter } from "expo-router";
import Header from '../../../components/Hotel/Header'

const AddRoom = () => {
  const router = useRouter();

  const [roomNo, setRoomNo] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomPrice, setRoomPrice] = useState("");
  const [count, setCount] = useState(1);
  const [description, setDescription] = useState("");

  const finalStep = () => {
    if(!roomNo || !roomType || !roomPrice || !description) {
      Alert.alert('Invalid Details', 'Please enter all the fields', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }

    if(roomNo && roomType && roomPrice && description) {
      router.push(`./Rooms`)
    }
  }

  return (
    <>
      <Header subText={"Add a new room"} mainText={"Room Details"} />

      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text>Room No</Text>
          <TextInput
            value={roomNo}
            onChangeText={(text) => setRoomNo(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Room Type</Text>
          <TextInput
            value={roomType}
            onChangeText={(text) => setRoomType(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={styles.container}>
          <Text>Adults</Text>
          <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>{count}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Price</Text>
          <View style={{flexDirection: "row", width: "100%", alignItems: "center", gap: 10}}>
            <TextInput
              value={roomPrice}
              keyboardType="numeric"
              onChangeText={(text) => setRoomPrice(text)}
              style={{ padding: 10, borderColor: "gray", borderWidth: 1, width: "90%" }}
              />
              <Text>/=</Text>
          </View>
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Description</Text>
          <TextInput
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

      </View>
      <Pressable
      // marginBottom: 40
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 0,
          padding: 10
        }}
      >
        {/* <View>
          <View
            style={{
              marginTop: 4,
              flexDirection: "row",
              alignItems: "center", 
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textDecorationLine: "line-through",
              }}
            >
              {route.params.oldPrice * route.params.adults}
            </Text>
            <Text style={{ fontSize: 20 }}>
              Rs. {route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <Text>
            You Saved {route.params.oldPrice - route.params.newPrice} rupees
          </Text>
        </View> */}

        <Pressable onPress={finalStep} style={{backgroundColor: "#007FFF", padding: 10, borderRadius: 5}}>
          <Text style={{textAlign: "center", color: "white", fontSize: 15}}>Final Step</Text>
        </Pressable>
      </Pressable>
    </>
  )
};

export default AddRoom;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  countText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});
