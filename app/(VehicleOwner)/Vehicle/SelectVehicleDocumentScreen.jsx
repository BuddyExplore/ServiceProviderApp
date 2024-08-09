import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import FileUploadItem from "../../../components/Vehicle/FileUploadItem";

const SelectVehicleDocumentScreen = ({ goToNextStep }) => {
  const [rcBook, setRcBook] = useState(null);
  const [revenueLicense, setRevenueLicense] = useState(null);

  const handleRcBookSelect = (file) => {
    setRcBook(file);
  };

  const handleRevenueLicenseSelect = (file) => {
    setRevenueLicense(file);
  };

  const handleNextStep = () => {
    if (rcBook && revenueLicense) {
      goToNextStep();
    } else {
      alert("Please upload both documents.");
    }
  };

  return (
    <View style={{ gap: 20 }}>
      <Text
        style={{
          fontWeight: "800",
          fontSize: 18,
          textAlign: "left",
        }}
      >
        Select Vehicle Document
      </Text>
      <Text
        style={{
          textAlign: "left",
          fontSize: 18,
          flexWrap: "wrap",
          width: 300,
        }}
      >
        Upload your Vehicle RC book
      </Text>
      {/* <FileUploadItem label="RC Book (PDF)" onFileSelect={handleRcBookSelect} /> */}
      <FileUploadItem
        label="Revenue License (PDF)"
        onFileSelect={handleRevenueLicenseSelect}
      />
      <TouchableOpacity onPress={handleNextStep} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: "#70D6E3",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#FFF",
    fontWeight: "700",
  },
});

export default SelectVehicleDocumentScreen;
