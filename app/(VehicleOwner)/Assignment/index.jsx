import { SafeAreaView } from "react-native-safe-area-context";
import BottomContainer from "../../../components/Vehicle/BottomContainer";
import MapComponent from "../../../components/Vehicle/MapComponent";
import { Image, View, Text, StyleSheet } from "react-native";
import {useState , useEffect} from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import FilterTrips from "../../../components/Vehicle/FilterTrips";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { router } from "expo-router";

// const GoButton = (props) => {
//   const color =
//     props.content == "Go"
//       ? "#0A89FF"
//       : props.content == "Emergency"
//       ? "red"
//       : "white";
//   return (
//     <View
//       style={{
//         position: "absolute",
//         top: Dimensions.get("screen").height * props.position[0],
//         left: Dimensions.get("screen").width * props.position[1],
//         padding: 20,
//         borderRadius: 30,
//         backgroundColor: color,
//         elevation: 4,
//       }}
//     >
//       {props.content == "Go" ? (
//         <Text
//           style={{
//             fontSize: 20,
//             fontFamily: "outfit",
//             fontWeight: 700,
//             color: "white",
//           }}
//         >
//           {props.content}
//         </Text>
//       ) : props.content == "Emergency" ? (
//         <MaterialIcons name="emergency-share" size={20} color={"white"} />
//       ) : (
//         ""
//       )}
//     </View>
//   );
// };



export default function AssignmentScreen() {

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        const token = await AsyncStorage.getItem("token");
        if (user && token) {
          console.log(user)
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };

    loadUserData();
  }, []);

  Text.defaultProps = {fontFamily: 'poppins-semibold'}

  let x = 5;
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <View style={styles.container}>
        {/* <MapComponent />
      <GoButton position={[0.77,0.45]} content="Go"/>
      <GoButton position={[0.77,0.01]} content="Emergency"/>
      <BottomContainer /> */}
            <View style={styles.header}>
              <Text style={styles.headertxt}>Bookings</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#F9F9F9",
                borderRadius: 28,
                margin: 'auto',
                marginTop: 5,
                width:'90%',
                height: 80,
                justifyContent: 'space-around',
                alignItems: 'center',
                display: "flex",
                flexDirection: "row",
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
              onPress={() => router.push("(VehicleOwner)/Assignment/incoming")}
            >
              <Image
                source={require("../../../assets/images/Vehicle/calendar.png")}
                contentFit="cover"
                transition={1000}
              />
              <View
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  gap: 20,
                }}
              >
                <Text style={styles.incomingtxt}>Incoming Requests</Text>
              </View>
              <View>
                <Text
                  style={{
                    backgroundColor: "#0A89FF",
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                    borderRadius: 20,
                    color: "white",
                  }}
                >
                  {x}
                </Text>
              </View>
            </TouchableOpacity>
            <FilterTrips />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container:{
    fontFamily: 'poppins-semibold'
  },
  header:{
    width: '100%' ,
    height: 100,
    display:'float',
  },
  headertxt:{
    margin: 'auto',
    fontSize: 25,
    fontFamily: 'poppins-semibold'
  },
  incomingtxt:{
    fontSize: 17,
    fontFamily: 'poppins-semibold'
  }
})
