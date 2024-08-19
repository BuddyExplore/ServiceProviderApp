import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";

const SupportPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert("Please fill out all fields.");
    } else {
      // Handle the form submission logic here
      Alert.alert("Your message has been sent!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Support</Text>
      <Text style={styles.subtitle}>How can we help you?</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        <View style={styles.faq}>
          <Text style={styles.faqQuestion}>Q: How can I change my booking?</Text>
          <Text style={styles.faqAnswer}>
            A: You can change your booking through the "Manage Booking" section in your account or contact our support team.
          </Text>
        </View>
        <View style={styles.faq}>
          <Text style={styles.faqQuestion}>Q: What should I do if I encounter issues with my payment?</Text>
          <Text style={styles.faqAnswer}>
            A: Please check your payment details and try again. If the issue persists, contact our support team for assistance.
          </Text>
        </View>
        {/* Add more FAQ items as needed */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.contactInfo}>Email: support@buddyexplore.com</Text>
        <Text style={styles.contactInfo}>Phone: +94 771234567</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Send Us a Message</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textArea}
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  faq: {
    marginBottom: 15,
  },
  faqQuestion: {
    fontWeight: "bold",
  },
  faqAnswer: {
    marginLeft: 10,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textArea: {
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#0078A1",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SupportPage;
