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
import { useNavigation } from "expo-router";
export default function GuidesListItem({ preference }) {
  const navigaton = useNavigation();
  console.log(navigaton);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          navigaton.navigate("TripDetails");
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Image
              source={preference.img}
              style={{
                width: 60,
                height: 60,
                borderRadius: 15,
              }}
            />
            <View>
              <Text
                style={{
                  color: "black",
                  fontSize: 19,
                  //fontWeight: "bold",
                }}
              >
                {preference.name}
              </Text>

              <Text
                style={[
                  styles.subText,
                  {
                    color:
                      preference.status === "Upcoming"
                        ? "green"
                        : preference.status === "Ongoing"
                        ? "blue"
                        : "orange",
                  },
                ]}
              >
                {preference.status}
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {preference.price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  touchable: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    overflow: "hidden", 
    backgroundColor: "rgba(0, 0, 0, 0.02)",
  },
  image: {
    width: 100,
    height: "100%",
    justifyContent: "flex-end", 
  },
  textContainer: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)", 
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
