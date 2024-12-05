import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React , {useEffect, useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { router, useNavigation } from "expo-router";
import axios from "axios";
import {Urls} from "../../constants/Urls"
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function GuidesListItem({ preference, name }) {
  const navigaton = useNavigation();
  console.log(navigaton.getState().routeNames[0]);
  const [loading, setLoading] = useState(false);

  const[tourist, setTourist] = useState();
  const[touristName, setTouristName] = useState('David');
  const date = new Date(preference.pickUpDate);

  const saveDataToStorage = async (bookingObject) => {
    try {
      await AsyncStorage.setItem('booking', JSON.stringify(bookingObject));
    } catch (error) {
      console.error('Error saving data to AsyncStorage', error);
    }
  };

  const formattedPickupDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  // useEffect(() => {
    
  //   const fetchItems = async () => {
  //     console.log("Here")
  //     try {
  //       const response = await axios.get(
  //         `${Urls.SPRING}/getUser/${preference.touristId}`
  //       );
  //       setTourist(response.data.content);
  //       if(tourist === null){
  //         console.log("No tourist found")
  //       }
  //       console.log(preference.touristId)
  //       console.log(response.data.content)
  //       //console.log(response)
  //     } catch (error) {

  //     } finally {
  //       await new Promise((resolve) => setTimeout(resolve, 100));
  //       // Set loading to false after fetching is done
  //     }
  //   };

  //   fetchItems();
  //   setLoading(false); 
  // }, []);



  const handleStatus = (status) => {
    switch (status) {
      case 0:
        return 'Pending';
      case 1:
        return 'Accepted';
      case 2:
        return 'Dispatched';
      default:
        return 'Unknown';
    }
  };

  
  if (loading) {
    return (
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        Loading...
      </Text>
    );
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() =>{
          saveDataToStorage(preference); //This should be present always, no matter what status is
          router.push("(VehicleOwner)/Assignment/requestdetails?accepted=true")
        }

        }
      >
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
              backgroundColor: "white",
              paddingRight: 20,
              borderBottomColor: "#D4D4D4",
              borderBottomWidth: 0.1,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                padding: 20,
              }}
            >
              <Image
                source={require("./../../assets/images/default.jpg")}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 34,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    fontWeight: "bold",
                    fontFamily: 'poppins-semibold'
                  }}
                >
                  {formattedPickupDate }
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    fontFamily: 'poppins-light'
                  }}
                >
                  {preference.fullName
                    ? preference.fullName
                    : 'Private User'}
                </Text>
                <View></View>
              </View>
            </View>
            <Text
              // style={[
              //   styles.subText,
              //   {
              //     color:
              //       preference.status === "Upcoming"
              //         ? "#0A89FF"
              //         : preference.status === "Ongoing"
              //         ? "yellow"
              //         : "green",
              //   },
              // ]}
              style={{
                backgroundColor:
                  navigaton.getState().routeNames[0] !== "TourGuideIndex"
                    ? "#E2F8FF"
                    : "#fff",
                borderRadius: 5,
                padding: 5,
                fontFamily: 'poppins-light',
                justifyContent: "center",
                fontSize: 12,
                display: 'flex',
                alignContent: "center",
                borderRadius: 15,
                width: 90,
                color:
                  navigaton.getState().routeNames[0] !== "TourGuideIndex"
                    ? "#0A89FF"
                    : "black",
              }}
            >
              {navigaton.getState().routeNames[0] !== "TourGuideIndex"
                ? handleStatus(preference.status)
                : "Loading"}
            </Text>
            {/* <Ionicons
            name="arrow-forward"
            size={24}
            color={Colors.PRIMARY}
            onPress={() => {
              navigaton.navigate("TripDetails");
            }}
          /> */}
          </View>
          <View
            style={{
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor: "white",
              paddingHorizontal: 24,
              paddingVertical: 20,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  color: "#969696",
                  fontSize: 12,
                  // justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <Text style={{ width: "50%", color: "#969696" }}>Pickup</Text>
                <Text style={{ width: "50%", textAlign: "right" }}>
                  {preference.pickUpLocation}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  color: "#969696",
                  fontSize: 12,
                  // justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <Text style={{ width: "50%", color: "#969696" }}>
                  Drop-off Date
                </Text>
                <Text style={{ width: "50%", textAlign: "right" }}>
                  {preference.dropOffDate}
                </Text>
              </View>
            </View>
            {/* <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  fontSize: 12,
                  // justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <Text style={{ width: "50%", color: "#969696" }}>Vehicle</Text>
                <Text style={{ width: "50%", textAlign: "right" }}>
                  {preference.vehicle}
                </Text>
              </View>
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: 'white',
  },
  touchable: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    borderColor: '#d6d6d6',
    borderWidth: 1,



    overflow: "hidden", // Ensures rounded corners are applied to the image ''
    // backgroundColor: "rgba(0, 0, 0, 0.02)",
  },
  image: {
    width: 100,
    height: "100%",
    justifyContent: "flex-end", // Positions text at the bottom
  },
  textContainer: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent background for text visibility
    borderBottomLeftRadius: 10,
    justifyContent: "center",
  },
  likesText: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: 10,
    right: 10,
  },
  mainText: {
    color: "white",
    fontWeight: "bold",
  },
  subText: {
    marginTop: 5,
    color: "green",
    fontSize: 12,
  },
});
