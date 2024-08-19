import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons"; 

const Notification = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleMoreInfo = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
        <Image
          style={styles.avatar}
          source={require("../../../assets/images/Shop/shop.png")}
        />
        <Text style={styles.name}>John Doe</Text>

        <View style={styles.header}>
          <Text style={styles.location}>Trip Location : </Text>
          <Text style={styles.locationValue}>Ella</Text>
        </View>

        <View style={styles.header}>
          <Text style={styles.duration}>Duration : </Text>
          <Text style={styles.durationValue}>3 days</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.moreInfoButton}
            onPress={() => {
              navigation.navigate("MoreInfo");
            }}
          >
            <Text style={{fontSize:16, color:"#0078A1"}}>More Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.acceptButton}>
            <Text style={{fontSize:16, color:"green"}}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.declineButton}>
            <Text style={{fontSize:16, color:"red"}}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for the front layer */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>More Information</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginHorizontal: 20,
    marginTop: 50,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    color: "#666",
    fontWeight: "bold",
    marginBottom: 5,
  },
  duration: {
    fontSize: 16,
    color: "#666",
    fontWeight: "bold",
  },
  locationValue: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 5,
  },
  durationValue: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginVertical: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  moreInfoButton: {
    backgroundColor: "#0078a133",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
  },
  acceptButton: {
    backgroundColor: "#d4edda",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
  },
  declineButton: {
    backgroundColor: "#f8d7da",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButtonText: {
    color: "#2196F3",
    fontSize: 16,
  },
});

export default Notification;
