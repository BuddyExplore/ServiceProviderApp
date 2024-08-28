import { SafeAreaView } from "react-native-safe-area-context";
import BottomContainer from "../../../components/Vehicle/BottomContainer";
import MapComponent from "../../../components/Vehicle/MapComponent";
import { Image, View, Text, Dimensions } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import FilterTrips from "../../../components/Vehicle/FilterTrips";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { router } from "expo-router";

// const GoButton = (props) => {
//   const color =
//     props.content == "Go"
//       ? "blue"
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
  let x = 5;
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        {/* <MapComponent />
      <GoButton position={[0.77,0.45]} content="Go"/>
      <GoButton position={[0.77,0.01]} content="Emergency"/>
      <BottomContainer /> */}
        <TouchableOpacity
          style={{
            backgroundColor: "#F9F9F9",
            borderRadius: 32,
            marginHorizontal: 50,
            marginTop: 50,
            // alignContent: "center",
            justifyContent: "center",
            display: "flex",

            flexDirection: "row",
            gap: 20,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
          onPress={() => router.push('(VehicleOwner)/Assignment/incoming')}
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
            <Text>Incoming Requests</Text>
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
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
