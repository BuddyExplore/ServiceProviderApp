import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ColoLKR } from "../../constants/Colors";
import GuidesListItem from "./item";
import axios from "axios";
import {Urls} from "../../constants/Urls"


export default function AssignmentList(props) {
  const [preferences, setPreferences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 
  useEffect(() => {
    
    const fetchItems = async () => {
      setLoading(true);
      console.log("Here")
      try {
        const response = await axios.get(
          `${Urls.SPRING}/api/Booking/Vehicle/driverBookings/123`
        );
        setData(response.data.content);
        console.log(data)
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
    setLoading(false);
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      const preferencesList = [

        {
          date: "2024-12-01",
          distance: 120,
          driverId: 123,
          dropOffDate: "2024-12-12",
          dropOffTime: "18:00:00",
          id: 1,
          passengers: 3,
          pickUpDate: "2024-12-10",
          pickUpLocation: "Colombo Fort",
          pickUpTime: "08:30:00",
          status: 0,
          touristId: 101,
          vehicleId: 201,
        },

        // {
        //   name: "David Williams",
        //   price: "LKR 2000",
        //   where: "Nugegoda",
        //   icon: "🔔",
        //   img: require("./../../assets/images/Vehicle/ella.jpeg"),
        //   status: "Upcoming",
        //   progress: "Trip Started",
        //   pickup: "Piliyandala Clock Tower",
        //   destination: "3",
        //   vehicle: "Toyota Coach",
        //   startDate: "Aug 09",
        //   endDate: "Aug 11",
        //   Time: "7.30",
        // },
      ];

      await new Promise((resolve) => setTimeout(resolve, 100));

      if (props.status !== "All") {
        setPreferences(
          preferencesList.filter((data) => data.status === props.status)
        );
      } else {
        setPreferences(preferencesList);
      }

      setLoading(false);
    };

    fetchData();
  }, [props.status]);

  if (loading) {
    return (
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        Loading...
      </Text>
    );
  }

  const fetchName = async (id) => {
    console.log("Here")
    try {
      const response = await axios.get(
        `${Urls.SPRING}/getUser/${id}`
      );
      setTourist(response.data.content);
      return `${response.data.content.first_name} ${response.data.content.last_name}`
      //console.log(response)
    } catch (error) {
      return "Private User"
    }
  };


  return (
    <View>
      {/* <Text
        style={{
          paddingHorizontal: 20,
          fontSize: 20,
          fontFamily: "outfit-bold",
        }}
      >
        Trips
      </Text> */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {!data && <Text style={{fontSize: 20, margin: 'auto', color:'grey', marginTop:30}}>No Data</Text>}
        {data && data.map((item, index) => (
          <GuidesListItem preference={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 500, // To prevent content from being hidden behind FAB
  },
});
