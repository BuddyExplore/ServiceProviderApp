import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import FilterTrips from "./FilterTrips";

import { Colors } from "../../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import VehicleCard from "./VehicleCard";
import TotalAmountContainer from "./TotalAmountContainer";

import { GestureHandlerRootView } from "react-native-gesture-handler";
const DashboardComponent = (data) => {
  const TotalEarnings = () => {
    const angle = 45;
    const radians = angle * (Math.PI / 180); // Convert to radians

    return (
      <TotalAmountContainer
        textColor="white"
        backgroundColor={[Colors.SECOND, Colors.SIXTH + "FA"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.7, y: 0.7 }}
        content={
          data.estimated == "completed"
            ? "Earnings"
            : data.estimated
            ? "Earnings Due"
            : "Earnings"
        }
        data={data.earning}
      />
    );
  };

  const TotalTrips = () => {
    return (
      <TotalAmountContainer
        textColor="white"
        backgroundColor={[Colors.FOURTH, Colors.PRIMARY]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        content={
          data.estimated == "ongoing"
            ? "Ongoing Trips"
            : data.estimated == "completed"
            ? "Finished Trips"
            : data.estimated
            ? "Due Trips"
            : "Trips"
        }
        data={data.Trips}
      />
    );
  };
  return (
    <GestureHandlerRootView>
      <View style={styles.TotalContainer}>
        <TotalEarnings />
        <TotalTrips />
      </View>
      <FilterTrips />
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  VehicleCardContainer: {
    display: "flex",
    flexDirection: "row",
    alignAssignment: "stretch",
    gap: 20,
    marginHorizontal: 16,
    marginVertical: 18,
    width: Dimensions.get("screen").width,
  },
  TotalContainer: {
    width: Dimensions.get("screen").width,
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    height: Dimensions.get("screen").height / 7.5,
    gap: 12,
  },
});

export default DashboardComponent;
