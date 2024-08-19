import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";

const FileUploadItem = ({ label, onFileSelect }) => {
  const handleFileSelect = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });

    if (result.type === "success") {
      onFileSelect(result);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={handleFileSelect} style={styles.button}>
        <Text style={styles.buttonText}>Upload Revenue License</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop:40,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    borderColor: "#0078A1",
    borderWidth:1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,

  },
  buttonText: {
    color: "black",
    fontWeight: "700",
  },
});

export default FileUploadItem;
