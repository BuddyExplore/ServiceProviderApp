import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availability: false,
    };
  }

  componentDidMount() {
    this.fetchAvailability();
  }

  fetchAvailability = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/availability");
      const data = await response.json();
      this.setState({ availability: data });
    } catch (error) {
      console.error("Error fetching availability:", error);
    }
  };

  toggleAvailability = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/availability?status=${!this.state
          .availability}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      this.setState({ availability: data });
    } catch (error) {
      console.error("Error updating availability:", error);
    }
  };

  render() {
    const { availability } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Availability: {availability ? "Available" : "Unavailable"}
        </Text>
        <Button
          title={`Set to ${availability ? "Unavailable" : "Available"}`}
          onPress={this.toggleAvailability}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Availability;
