import { Text, View } from "react-native";
import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
export class index extends Component {
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("Guides/upcomingtrips")}
          >
            <Text style={{ fontWeight: "bold" }}>Upcoming Trips</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>50</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("Guides/ongoingtrips")}
          >
            <Text style={{ fontWeight: "bold" }}>Ongoing Trips</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>50</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("Guides/completedtrips")}
          >
            <Text style={{ fontWeight: "bold" }}>Completed Trips</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>25</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  scrollView: {
    padding: 10,
    paddingBottom: 85,
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

export default index;
