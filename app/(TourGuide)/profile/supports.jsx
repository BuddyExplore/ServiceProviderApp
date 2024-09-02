import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/TourGuide/header";

const SupportScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactno, setContactno] = useState("");

  const handleSubmit = () => {
    // Placeholder for form submission logic
    Alert.alert("Support Request Sent", "We will get back to you shortly.");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Support" navigation={navigation} />
      <View style={styles.page}>
        <View style={styles.Card}>
          <View style={styles.header}>
            <Text style={styles.title}>Support</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={message}
              onChangeText={setMessage}
              placeholder="Enter your message"
              multiline
            />
          </View>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    color: "gray",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  textArea: {
    height: 100,
  },
  Card: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 1,
    justifyContent: "center",
  },
  page: {
    padding: 16,
  },
});

export default SupportScreen;
