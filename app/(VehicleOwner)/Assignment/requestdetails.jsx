import React , {useState, useEffect} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import photo1 from "../../../assets/images/default.jpg";
import { router, useGlobalSearchParams, useNavigation } from "expo-router";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import {Urls} from "../../../constants/Urls"

const RequestDetails = (props) => {
  const { accepted } = useGlobalSearchParams() ?? true;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(null);


  useEffect(() => {
    const fetchUserFromStorage = async () => {
      try {
        const bookingData = await AsyncStorage.getItem('booking');
        if (bookingData) {
          setBooking(JSON.parse(bookingData)); // Parse the JSON string back to an object
          console.log(bookingData)
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage', error);
      }
    };

    fetchUserFromStorage();
    setLoading(false)
  }, []);

  if(loading){
    return(
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }else{

    const date1 = new Date(booking.pickUpDate);
    const date2 = new Date(booking.dropOffDate);
    const formattedPickupDate = date1.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    const formattedDropoffDate = date2.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    const handleDispatch = () => {
      const fetchItems = async () => {
        console.log("Here")
        try {
          const response = await axios.put(
            `${Urls.SPRING}/api/Booking/Vehicle/updateStatus/${booking.id}/2`
          );
          console.log("Done")
        } catch (error) {
          console.error("Error fetching items:", error);
        }
      };
  
      fetchItems();
      navigation.navigate("StartRide")
    }
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <Text style={styles.headerText}>Request Details</Text> */}

      <ScrollView contentContainerStyle={styles.detailsContainer}>
        {/* User Information */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}><Ionicons name="person-outline" size={20} color={'black'} /> User</Text>
          <View style={styles.userInfo}>
            <View style={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
              <Image source={photo1} style={styles.avatar} />
              <Text style={styles.nameText}>{booking.fullName}</Text>
            </View>
            
              <TouchableOpacity style={styles.messageButton}>
                <Text style={styles.messageButtonText}>Message</Text>
              </TouchableOpacity>
          </View>
        </View>

        {/* Vehicle Information */}
        <View style={styles.section}>
        <Text style={styles.sectionHeader}><Ionicons name="car-outline" size={23} color={'black'} /> Vehicle ID</Text>
          <Text style={styles.valueText}>{booking.vehicleId}</Text>
        </View>

        {/* Trip Dates & Times */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}><Ionicons name="calendar-clear-outline" size={20} color={'black'} /> Trip dates & times</Text>
          <View style={styles.dateRow}>
            <Text style={[styles.infoText , {color: '#969696'}]}>Pick-up:</Text>
            <Text style={styles.valueText}>{formattedPickupDate}, {booking.pickUpTime}</Text>
          </View>
          <View style={styles.dateRow}>
            <Text style={[styles.infoText , {color: '#969696'}]}>Drop-off:</Text>
            <Text style={styles.valueText}>{formattedDropoffDate}, {booking.dropOffTime}</Text>
          </View>
        </View>

        {/* Destinations */}
        <View style={styles.section}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10
          }}>
            <Text style={[styles.sectionHeader, {width: '50%'}]}><Ionicons name="location-outline" size={21} color={'black'} /> Destinations</Text>
            <TouchableOpacity style={styles.mapButton}>
              <Text style={styles.mapButtonText}>MapView</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.destinationRow}>
            <Text style={styles.valueText}><Ionicons name="locate-sharp" size={22} color={'black'} /> {booking.pickUpLocation}</Text>
          </View>
          <View style={styles.destinationRow}>
            <Text style={styles.valueText}><Ionicons name="location-sharp" size={22} color={'black'} /> Horton Plains, Nuwara Eliya</Text>
          </View>
          <View style={styles.destinationRow}>
            <Text style={styles.valueText}><Ionicons name="location-sharp" size={22} color={'black'} /> Lake Gregory, Nuwara Eliya</Text>
          </View>
          <View style={styles.destinationRow}>
            <Text style={styles.valueText}><Ionicons name="location-sharp" size={22} color={'black'} /> Sri Dalada Maligawa, Kandy</Text>
          </View>
        </View>

        {/* Passengers */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}><Ionicons name="people-outline" size={22} color={'black'} /> Passengers</Text>
          <Text style={styles.valueText}>{booking.passengers}</Text>
        </View>

        {accepted == "true" ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleDispatch}
          >
            <Text style={{ color: "white"}}>Dispatch</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.rejectButton}>
              <Text style={styles.rejectButtonText}>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  detailsContainer: {
    paddingBottom: 20,
  },
  section: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    paddingBottom: 20
  },
  sectionHeader: {
    fontSize: 16,
    fontFamily : 'poppins-medium',
    display: 'flex',
    gap: 5,
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  messageButton: {
    marginTop: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderColor: '#0A89FF',
    borderWidth: 1,
    borderRadius: 10
  },
  messageButtonText: {
    color: '#0A89FF',
    margin: 'auto'
  },
  infoText: {
    fontSize: 14,
    color: "#000",
    fontFamily: 'poppins-light'
  },
  valueText: {
    display: 'flex',
    fontSize: 14,
    fontFamily: 'poppins-light',
    marginBottom: 3,
    paddingLeft:20
  },
  dateRow: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  mapButton: {
    paddingHorizontal: 20,
    borderColor: '#0A89FF',
    borderWidth: 1,
    borderRadius: 10
  },
  mapButtonText: {
    color: "#0A89FF",
    margin: 'auto'
  },
  destinationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  destinationIcon: {
    marginRight: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,

  },
  rejectButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#0A89FF'
  },
  rejectButtonText: {
    color: '#0A89FF',
    fontWeight: "bold",
    textAlign: "center",
  },
  acceptButton: {
    backgroundColor: '#0A89FF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    flex: 1,
  },
  button: {
    color: "white",
    backgroundColor: "#0A89FF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  acceptButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default RequestDetails;
