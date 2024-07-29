import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";
import React, { useLayoutEffect } from "react";
import { pixelNormalize } from "../../../components/Normalise";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../../../components/Hotel/Amenities";
import { useRouter } from "expo-router";
import Header from "../../../components/Hotel/Header";

const PropertyInfoScreen = () => {
  const route = useRouter;
  const {width:SCREEN_WIDTH} = Dimensions.get("window");

  const hotel = {
    id: "10",
    name: "FabHotel Zeke",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1",
    rating: 3.6,
    address: "346,  Main Road, Galle, Sri Lanka ",
    oldPrice: 4600,
    newPrice: 3312,
    latitude: "6.0535",
    longitude: "80.2209",
    photos: [
      {
        id: "100",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1",
      },
      {
        id: "101",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845633.jpg?k=19a43441c40e9c9ff3b57d6a1a7c379c4def04730e34f76fd4a298eaefcd23d1&o=&hp=1",
      },
      {
        id: "102",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845621.jpg?k=52411b8fb2fe37edf07da6d3dfb145cc85288ac210f28ff19608ba101f1bba0e&o=&hp=1",
      },
      {
        id: "103",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845650.jpg?k=36bbad9d47f2db957eddbf922e711fbfc9ab2bf901ceaa1bd5d1ca4dc857f21c&o=&hp=1",
      },
      {
        id: "104",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845660.jpg?k=0db1ba8f8f2c1de0ded8b1dc30d4f181a52b898b0a9107c5a24f86688cc24c5e&o=&hp=1",
      },
      {
        id: "105",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845662.jpg?k=94bdc326cbec92e658a262a7d81387e65ede9d250489b1a3cc6d22d6b9c935ff&o=&hp=1",
      },
      {
        id: "106",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845665.jpg?k=637ae74710f45147445e49211d54d63a6200b6857f1bd03e38e41cceb0b931eb&o=&hp=1",
      },
      {
        id: "107",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845623.jpg?k=dc33256ff9ff9eda46683c776c1cf9af04910364ec8d1d9523b8cf80d18cca65&o=&hp=1",
      },
      {
        id: "108",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845673.jpg?k=24dd44dc2ac1bfda8aabdbff24571d211f42a4b5cf175fc9043113b61f57f670&o=&hp=1",
      },
      {
        id: "109",
        image: "2",
      },
    ],
    rooms: [
      {
        id: "202",
        name: "King Room with Balcony",
        size: 419,
        refundable: "refundable",
        payment: "Pay at the property",
        bed: "1 queen bed",
      },
      {
        id: "203",
        name: "Deluxe king Room",
        size: 440,
        refundable: "non refundable",
        payment: "Pay in advance",
        bed: "1 queen bed",
      },
      {
        id: "205",
        name: "Two bedroom with balcony",
        size: 490,
        refundable: "refundable",
        payment: "Pay at the property",
        bed: "1 queen bed",
      },
    ],
  };

  const difference = 100;
  const offerPrice = 100;

  return (
    <>
      <Header subText={"Your Profile"} mainText={"FabZeke Hotel"} />
      <ScrollView>
        <View>
          <Image style={{height: 300, width: (SCREEN_WIDTH * 0.95), borderRadius: 10, marginVertical: 10, marginHorizontal: "auto"}} source={{uri: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1"}} />
        </View>

        <View
          style={{
            marginHorizontal: 12,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {hotel.name}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                marginTop: 7,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{hotel.rating}</Text>
              {/* <View
                style={{
                  width: 100,
                  paddingVertical: 3,
                  backgroundColor: "#003580",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{ textAlign: "center", fontSize: 15, color: "white" }}
                >
                  Genius Level
                </Text>
              </View> */}
            </View>
          </View>

          {/* <View
            style={{
              backgroundColor: "#17B169",
              paddingVertical: 4,
              paddingHorizontal: 6,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white", fontSize: 13 }}>
              Travel Sustainable
            </Text>
          </View> */}
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />

        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
            fontWeight: "500",
            marginHorizontal: 12,
          }}
        >
          Location
        </Text>
        <View
          style={{
            marginTop: 4,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 12,
            gap: 8,
          }}
        >
          <Text style={{ fontSize: 12, color: "gray" }}>
            No: 80, Main Road, Galle.
          </Text>
        </View>

        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
            fontWeight: "500",
            marginHorizontal: 12,
          }}
        >
          Hotel Manager
        </Text>
        <View
          style={{
            marginTop: 4,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 12,
            gap: 8,
          }}
        >
          <Text style={{ fontSize: 12, color: "gray" }}>
            Isuka Premathilake
          </Text>
        </View>

        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
            fontWeight: "500",
            marginHorizontal: 12,
          }}
        >
          Contact
        </Text>
        <View
          style={{
            marginTop: 4,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 12,
            gap: 8,
          }}
        >
          <Text style={{ fontSize: 12, color: "gray" }}>
            0113984398
          </Text>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />

        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3, marginLeft: 10 }}>
          Gallery
        </Text>

        <Pressable
          style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
        >
          {hotel.photos.slice(0, 5).map((photo) => (
            <View style={{ margin: 6 }}>
              {/* image width should be 120 */}
              <Image
                style={{
                  width: 100,
                  // height: pixelNormalize(80),
                  height: 100,
                  borderRadius: pixelNormalize(4),
                }}
                source={{ uri: photo.image }}
              />
            </View>
          ))}

          <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ textAlign: "center", marginLeft: 20 }}>
              Add More
            </Text>
          </Pressable>
        </Pressable>

        {/* <View
          style={{
            margin: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check In
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              2024/4/5
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check Out
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              2024/4/5
            </Text>
          </View>
        </View>

        <View style={{ margin: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
            Rooms and Guests
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}>
            {hotel.rooms} rooms {hotel.adults} adults{" "}
            {hotel.children} children
          </Text>
        </View> */}

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />

        <Amenities />

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
      </ScrollView>

      {/* <Pressable
        onPress={() =>
          navigation.navigate("Rooms", {
            rooms: route.params.availableRooms,
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            name: route.params.name,
            children: route.params.children,
            adults: route.params.adults,
            rating: route.params.rating,
            startDate: route.params.selectedDates.startDate,
            endDate: route.params.selectedDates.endDate,
          })
        }
        style={{
          backgroundColor: "#6CB4EE",
          position: "absolute",
          bottom: 20,
          padding: 15,
          width: "95%",
          marginHorizontal: 10,
          fontWeight: "bold",
          fontSize: 17,
        }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>
          Select Availability
        </Text>
      </Pressable> */}
    </>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
