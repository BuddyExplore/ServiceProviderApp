import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import FileUploadItem from "../../../components/Vehicle/FileUploadItem";
import CheckBoxItem from "../../../components/Vehicle/CheckBox";

const SelectVehicleDocumentScreen = ({ goToNextStep }) => {
  const [confirm, setConfirm] = useState(false); // Default to false
  const [revenueLicense, setRevenueLicense] = useState(null);

  const handleConfirm = () => {
    setConfirm(!confirm);
  };

  const handleRevenueLicenseSelect = (file) => {
    setRevenueLicense(file);
  };

  const handleNextStep = () => {
    if (confirm && revenueLicense) {
      goToNextStep();
    } else if (!confirm) {
      alert("Please accept the Terms of Use and Privacy Policy.");
    } else if (!revenueLicense) {
      alert("Please upload the revenue license.");
    } else {
      alert("Please complete this step.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.title}>Select Vehicle Document</Text>
      <Text style={styles.subtitle}>Upload your Vehicle Revenue License.</Text>
      <View style={styles.uploadContainer}>
        <FileUploadItem
          label="Revenue License"
          onFileSelect={handleRevenueLicenseSelect}
        />

        <View style={styles.confirmContainer}>
        <CheckBoxItem checked={confirm} onPress={handleConfirm} />
        <Text style={styles.confirmText}>
          I confirm that I accept your Terms of Use and Privacy Policy
        </Text>
      </View>

        <TouchableOpacity onPress={handleNextStep} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>     
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "800",
    fontSize: 18,
    textAlign: "left",
    marginTop: 40,
    marginLeft: 30,
  },
  subtitle: {
    textAlign: "left",
    fontSize: 18,
    flexWrap: "wrap",
    marginLeft: 30,
  },
  uploadContainer: {
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  nextButton: {
    backgroundColor: "#0078A1",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    marginTop: 50,
  },
  nextButtonText: {
    color: "#FFF",
    fontWeight: "700",
  },
  confirmContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  confirmText: {
    fontSize: 16,
    flex: 1,
    flexWrap: "wrap",
  },
});

export default SelectVehicleDocumentScreen;
