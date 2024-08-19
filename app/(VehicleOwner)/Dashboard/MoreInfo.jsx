import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons"; 

const MoreInfo = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.userInfo}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/images/Shop/shop.png")}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.iconTextContainer}>
        <Ionicons name="person-outline" size={20} color="black"/>
          <Text style={styles.sectionTitle}>User</Text>
        </View>
        <Text style={styles.sectionContent}>John Doe</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.iconTextContainer}>
        <Ionicons name="calendar-outline" size={20} color="black"/>
          <Text style={styles.sectionTitle}>Trip dates & times</Text>
        </View>
        <Text style={styles.sectionContent}>
          Pick-up: Aug 09, 2024 11:00 am
        </Text>
        <Text style={styles.sectionContent}>
          Drop-off: Aug 11, 2024 10:00 pm
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.iconTextContainer}>
        <Ionicons name="location-outline" size={20} color="black"/>
          <Text style={styles.sectionTitle}>Destinations</Text>
        </View>
        <Text style={styles.sectionContent}>Pililyandala Clock Tower</Text>
        <Text style={styles.sectionContent}>
        <Ionicons name="radio-button-off-outline" size={10} fontWeight="bold" color="black"/>{"  "}
          Horton Plains, Nuwara Eliya
        </Text>
        <Text style={styles.sectionContent}>
        <Ionicons name="radio-button-off-outline" size={10} color="black"/>{"  "}
          Lake Gregory, Nuwara Eliya
        </Text>
        <Text style={styles.sectionContent}>
        <Ionicons name="radio-button-off-outline" size={10} color="black"/>{"  "}
          Sri Dalada Maligawa, Kandy
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.iconTextContainer}>
        <Ionicons name="people-outline" size={20} color="black"/>
          <Text style={styles.sectionTitle}>Passengers</Text>
        </View>
        <Text style={styles.sectionContent}>15 passengers</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 80,
  },
  closeButton: {
    position: "absolute",
    right: 0,
    zIndex: 1,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#0078A1",
  },
  section: {
    marginBottom: 20,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: "#555",
    marginLeft: 30,
    marginBottom: 5,
  },
});

export default MoreInfo;
