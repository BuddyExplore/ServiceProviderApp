import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { router, useNavigation } from "expo-router";
export default function GuidesListItem({ preference }) {
  const navigaton = useNavigation();
  console.log(navigaton.getState().routeNames[0]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() =>
          router.push("(VehicleOwner)/Assignment/requestdetails?accepted=true")
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
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
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
                source={preference.img}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 34,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "black",
                    fontSize: 19,
                    fontWeight: "bold",
                  }}
                >
                  {preference.name}
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 15,
                  }}
                >
                  {navigaton.getState().routeNames[0] !== "TourGuideIndex"
                    ? preference.startDate - preference.endDate
                    : preference.startDate}
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
                justifyContent: "center",
                alignContent: "center",
                width: 90,
                color:
                  navigaton.getState().routeNames[0] !== "TourGuideIndex"
                    ? "#0A89FF"
                    : "black",
              }}
            >
              {navigaton.getState().routeNames[0] !== "TourGuideIndex"
                ? preference.progress
                : preference.price}
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
                  {preference.pickup}
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
                  Destination
                </Text>
                <Text style={{ width: "50%", textAlign: "right" }}>
                  {preference.destination}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "column" }}>
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
            </View>
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
  },
  touchable: {
    width: "100%",
    height: 200,
    borderRadius: 10,
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
