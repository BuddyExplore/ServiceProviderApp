import React ,{useEffect, useState} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";
import {Urls} from "../../../constants/Urls"
import { router } from "expo-router";
import RequestItem from "../../../components/Vehicle/requestitem"


const IncomingRequests = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() => {
    
    const fetchItems = async () => {
      setLoading(true);
      console.log("Here")
      try {
        const response = await axios.get(
          `${Urls.SPRING}/api/Booking/Vehicle/driverBookings/123/0`
        );
        setData(response.data.content);
        console.log(response.data.content)
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        Loading...
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.requestsContainer}>
        {/* Request Card 1 */}
        {data && data.length > 0 && data.map((item, index) => (
          <RequestItem booking={item} key={index} />
        ))}
        {!data && 
          <Text style={{margin: 'auto', marginTop: 50, fontSize: 20, color: 'grey'}}>No requests yet..</Text>  
        }
        

        {/* Add more request cards as needed */}
      </ScrollView>
    </View>
  );
};

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
    backgroundColor: "#F9F9F9",
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
});

export default IncomingRequests;
