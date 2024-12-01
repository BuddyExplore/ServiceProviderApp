import React, {useState} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal
} from "react-native";
import photo1 from "../../assets/images/default.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import axios from "axios";
import {Urls} from "../../constants/Urls"



const RequestItem = ({booking}) =>{
  const date = new Date(booking.pickUpDate);
  const date1 = new Date(booking.dropOffDate);

  const [modalVisible, setModalVisible] = React.useState(false)

  const formattedPickupDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
  });

  const formattedPickupDate1 = date1.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
  });

  const handleAccept = () => {

    const fetchItems = async () => {
      console.log("Here")
      try {
        const response = await axios.put(
          `${Urls.SPRING}/api/Booking/Vehicle/updateStatus/${booking.id}/1`
        );
        console.log("Done")
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();

   setModalVisible(true)
  }

  const handleModalBtn = () => {
    setModalVisible(false)
    router.push("(VehicleOwner)/Assignment")
  }

    return(
        <View style={styles.requestCard}>
          <View style={styles.requestHeader}>
            <Image source={photo1} style={styles.avatar} />
            <View>
              <Text style={styles.nameText}>{booking.fullName}</Text>
              <Text style={styles.dateText}>{formattedPickupDate} - {formattedPickupDate1}</Text>
            </View>

            <TouchableOpacity
              style={styles.moreOptions}
              onPress={() =>
                router.push(
                  "(VehicleOwner)/Assignment/requestdetails?accepted=false"
                )
              }
            >
              <MaterialIcons name="keyboard-arrow-right" size={25} />
            </TouchableOpacity>
          </View>

          <View style={styles.requestBody}>
            <Text style={styles.infoText}>Pick up</Text>
            <Text style={styles.valueText}>{booking.pickUpLocation}</Text>

            <Text style={styles.infoText}>Destinations</Text>
            <Text style={styles.valueText}>4</Text>

            <Text style={styles.infoText}>Vehicle ID</Text>
            <Text style={styles.valueText}>{booking.vehicleId}</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.rejectButton} >
              <Text style={styles.rejectButtonText}>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
          </View>

          <Modal
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Request has been accepted!</Text>
                <TouchableOpacity style={styles.acceptokbtn} onPress={handleModalBtn}>
                  <Text style={{color: 'white'
                  }}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: "#fff",
    },
    headerText: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 20,
    },
    requestsContainer: {
      paddingBottom: 20,
    },
    requestCard: {
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: '#e6e6e6',
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
      elevation: 1, // For Android shadow
    },
    requestHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    arrow: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
      alignItems: "right",
    },
    nameText: {
      fontSize: 16,
      fontFamily:'poppins-regular',
      fontWeight: 'bold'
    },
    dateText: {
      color: "#888",
      fontFamily:'poppins-light',
      fontSize: 12
    },
    moreOptions: {
      marginLeft: "auto",
    },
    requestBody: {
      marginVertical: 10,
    },
    infoText: {
      fontSize: 14,
      fontFamily: 'poppins-light',
      color: "#888",
    },
    valueText: {
      fontSize: 14,
      fontFamily: 'poppins-regular',
      marginBottom: 5,
    },
    buttonsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    },
    rejectButton: {
      borderColor: "#0A89FF",
      borderWidth: 1,
      backgroundColor:'white',
      width: 100,
      alignItems:'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
    },
    rejectButtonText: {
      color: "#0A89FF",
      
    },
    acceptButton: {
      backgroundColor: "#0A89FF",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      width: 100,
      alignItems:'center',
    },
    acceptButtonText: {
      color: "#fff",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
    },
    modalContent: {
      width: "70%", // Set width to 50%
      height: 300, // Set height to 50%
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    modalText: {
      marginBottom: 20,
      fontSize: 16,
    },
    acceptokbtn: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: "#0A89FF",
      borderRadius: 10,
      marginTop: 20
    },
  });

  export default RequestItem;