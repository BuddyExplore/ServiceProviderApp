import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ApproveDocumentUseScreen = ({ rcBook, revenueLicense, goToNextStep }) => {
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    setAgreed(true);
    goToNextStep();
  };

  return (
    <View style={{ gap: 20 }}>
      <Text style={styles.header}>Approve Document Use</Text>
      <Text style={styles.subHeader}>Uploaded Documents:</Text>
      <Text style={styles.documentText}>
        RC Book: {rcBook ? rcBook.name : "Not uploaded"}
      </Text>
      <Text style={styles.documentText}>
        Revenue License: {revenueLicense ? revenueLicense.name : "Not uploaded"}
      </Text>
      <Text style={styles.agreementText}>
        Do you agree to use these documents for verification purposes?
      </Text>
      <TouchableOpacity
        onPress={handleAgree}
        style={[styles.agreeButton, agreed && styles.disabledButton]}
        disabled={agreed}
      >
        <Text style={styles.agreeButtonText}>
          {agreed ? "Agreed" : "Agree"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: "800",
    fontSize: 18,
    textAlign: "left",
  },
  subHeader: {
    fontSize: 16,
    marginTop: 10,
  },
  documentText: {
    fontSize: 16,
    marginVertical: 5,
  },
  agreementText: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  agreeButton: {
    backgroundColor: "#70D6E3",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  agreeButtonText: {
    color: "#FFF",
    fontWeight: "700",
  },
  disabledButton: {
    backgroundColor: "#A0A0A0",
  },
});

export default ApproveDocumentUseScreen;
