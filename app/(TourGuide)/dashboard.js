import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/TourGuide/header";
import { useRouter } from "expo-router";

const DashboardScreen = ({ navigation }) => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Header title="Dashboard" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require("../../assets/images/TourGuide/buddy.jpg")}
          style={{ height: 270, width: "100%" }}
          resizeMethod="resize"
          blurRadius={1}
        />
        <View style={styles.page}>
          <View>
            <TouchableOpacity
              style={styles.card}
              // onPress={() => navigation.navigate("UpcomingTrips")}
              onPress={() => router.push("UpcomingTrips")}
            >
              <Text style={{ fontWeight: "bold" }}>Upcoming Trips</Text>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>50</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.card}
              // onPress={() => navigation.navigate("OngoingTrips")}
              onPress={() => router.push("OngoingTrips")}
            >
              <Text style={{ fontWeight: "bold" }}>Ongoing Trips</Text>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>50</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.card}
              // onPress={() => navigation.navigate("CompletedTrips")}
              onPress={() => router.push("CompletedTrips")}
            >
              <Text style={{ fontWeight: "bold" }}>Completed Trips</Text>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>25</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  scrollView: {
    padding: 10,
  },
  card: {
    padding: 25,
    backgroundColor: "lightblue",
    marginBottom: 8,
    borderRadius: 8,
    elevation: 1,
    alignItems: "center",
    marginTop: 10,
  },
  page: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 1,
    justifyContent: "center",
  },
});

export default DashboardScreen;
