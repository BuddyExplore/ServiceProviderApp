import {
    Text,
    StyleSheet,
    
    View,
    Dimensions,
    ImageBackground,
    Button,
    TouchableOpacity,
  } from "react-native";
 
  import { ScrollView } from "react-native-gesture-handler";
  import MaterialIcons from "react-native-vector-icons/MaterialIcons";
  import VehicleCard from "./VehicleCard";
  import TotalAmountContainer from "./TotalAmountContainer";
  
  import { GestureHandlerRootView } from "react-native-gesture-handler";
  const DashboardComponent = (data) => {
    const TotalEarnings = () => {
      return (
        <TotalAmountContainer
          textColor="white"
          backgroundColor="#4BAD4FBB"
          content={
            data.estimated == "completed"
              ? "Earnings"
              : data.estimated
              ? "Earnings Due"
              : "Total Earnings"
          }
          data={data.earning}
        />
      );
    };
  
    const TotalAssignments = () => {
      return (
        <TotalAmountContainer
          textColor="white"
          backgroundColor="#0078A1BB"
          content={
            data.estimated == "ongoing"
              ? "Ongoing Assignments"
              : data.estimated == "completed"
              ? "Finished Assignments"
              : data.estimated
              ? "Due Assignments"
              : "Total Assignments"
          }
          data={data.assignments}
        />
      );
    };
    return (
      <GestureHandlerRootView>
       
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{marginBottom:20}}>
              <View style={styles.VehicleCardContainer}>
                <VehicleCard vehicle="Car" />
                <VehicleCard vehicle="Jeep" />
                <VehicleCard vehicle="Motor Bike" />
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: "#F0F0F0",
                      justifyContent: "center",
                      alignContent: "center",
                      padding: 15,
                      margin: 10,
                      borderRadius: 100,
                      opacity: 0.9,
                    }}
                  >
                    <MaterialIcons name="add" size={48} />
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={styles.TotalContainer}>
              <TotalEarnings />
              <TotalAssignments />
            </View>
          
        
      </GestureHandlerRootView>
    );
  };
  const styles = StyleSheet.create({
    VehicleCardContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      gap: 20,
      marginHorizontal: 16,
      marginVertical: 18,
      width: Dimensions.get("window"),
    },
    TotalContainer: {
      width: Dimensions.get("screen"),
      paddingHorizontal: 50,
      paddingBottom: 90,
      height: Dimensions.get("screen"),
      gap: 30,
    },
  });
  
  export default DashboardComponent;
  