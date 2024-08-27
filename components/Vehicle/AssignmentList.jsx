import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../../constants/Colors";
import GuidesListItem from "./item";

export default function AssignmentList(props) {
  const [preferences, setPreferences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const preferencesLists = [
        {
          name: "John",
          price: "Rs 2000",
          where: "Nugegoda",
          icon: "🔔",
          img: require("./../../assets/images/Vehicle/ella.jpeg"),
          status: "Upcoming",
        },
        {
          name: "Karan",
          price: "Rs 2400",
          where: "Hokanda",
          icon: "👤",
          img: require("./../../assets/images/Vehicle/Dunhinda_Falls.jpg"),
          status: "Upcoming",
        },
        {
          name: "Doe",
          price: "Rs 1200",
          where: "Moratuwa",
          icon: "🔔",
          img: require("./../../assets/images/Vehicle/ella.jpeg"),
          status: "Upcoming",
        },
        {
          name: "Adams",
          price: "Rs 700",
          where: "Pannipitiya",
          icon: "⚙️",
          img: require("./../../assets/images/Vehicle/Dunhinda_Falls.jpg"),
          status: "Upcoming",
        },
        {
          name: "Peter",
          price: "Rs 550",
          where: "Nugegoda",
          icon: "🔔",
          img: require("./../../assets/images/Vehicle/ella.jpeg"),
          status: "Upcoming",
        },
        {
          name: "Smith",
          price: "Rs 500",
          where: "Hokanda",
          icon: "👤",
          img: require("./../../assets/images/Vehicle/ella.jpeg"),
          status: "Upcoming",
        },
        {
          name: "David",
          price: "Rs 300",
          where: "Moratuwa",
          icon: "🔔",
          img: require("./../../assets/images/Vehicle/Dunhinda_Falls.jpg"),
          status: "Ongoing",
        },
        {
          name: "Walpaper",
          price: "Rs 200",
          where: "Pannipitiya",
          icon: "⚙️",
          img: require("./../../assets/images/Vehicle/Dunhinda_Falls.jpg"),
          status: "Completed",
        },
      ];
      const preferencesList = [
        {
          name: "David Williams",
          price: "Rs 2000",
          where: "Nugegoda",
          icon: "🔔",
          img: require("./../../assets/images/Vehicle/ella.jpeg"),
          status: "Upcoming",
          progress: "Trip Started",
          pickup: "Piliyandala Clock Tower",
          destination: "3",
          vehicle: "Toyota Coach",
          startDate: "Aug 09",
          endDate: "Aug 11",
        },
        {
          name: "David Williams",
          price: "Rs 2000",
          where: "Nugegoda",
          icon: "🔔",
          img: require("./../../assets/images/Vehicle/ella.jpeg"),
          status: "Upcoming",
          progress: "Trip Started",
          pickup: "Piliyandala Clock Tower",
          destination: "3",
          vehicle: "Toyota Coach",
          startDate: "Aug 09",
          endDate: "Aug 11",
        },
        {
          name: "David Williams",
          price: "Rs 2000",
          where: "Nugegoda",
          icon: "🔔",
          img: require("./../../assets/images/Vehicle/ella.jpeg"),
          status: "Upcoming",
          progress: "Trip Started",
          pickup: "Piliyandala Clock Tower",
          destination: "3",
          vehicle: "Toyota Coach",
          startDate: "Aug 09",
          endDate: "Aug 11",
        },
        {
          name: "David Williams",
          price: "Rs 2000",
          where: "Nugegoda",
          icon: "🔔",
          img: require("./../../assets/images/Vehicle/ella.jpeg"),
          status: "Upcoming",
          progress: "Trip Started",
          pickup: "Piliyandala Clock Tower",
          destination: "3",
          vehicle: "Toyota Coach",
          startDate: "Aug 09",
          endDate: "Aug 11",
        },
        {
          name: "David Williams",
          price: "Rs 2000",
          where: "Nugegoda",
          icon: "🔔",
          img: require("./../../assets/images/Vehicle/ella.jpeg"),
          status: "Upcoming",
          progress: "Trip Started",
          pickup: "Piliyandala Clock Tower",
          destination: "3",
          vehicle: "Toyota Coach",
          startDate: "Aug 09",
          endDate: "Aug 11",
        },
        {
          name: "David Williams",
          price: "Rs 2000",
          where: "Nugegoda",
          icon: "🔔",
          img: require("./../../assets/images/Vehicle/ella.jpeg"),
          status: "Upcoming",
          progress: "Trip Started",
          pickup: "Piliyandala Clock Tower",
          destination: "3",
          vehicle: "Toyota Coach",
          startDate: "Aug 09",
          endDate: "Aug 11",
        },
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

  return (
    <View>
      <Text
        style={{
          paddingHorizontal: 20,
          fontSize: 20,
          fontFamily: "outfit-bold",
        }}
      >
        Trips
      </Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={{
            padding: 20,
            paddingBottom: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 1,
            alignItems: "center",
          }}
        ></View>

        {preferences.map((item, index) => (
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
