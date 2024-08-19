import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import CheckBoxItem from "../../../components/Vehicle/CheckBox";

const ApproveDocumentUseScreen = ({
  setAmenities,
  selectedAmenities,
  goToNextStep,
}) => {
  const Amenities = [
    "Wifi",
    "A/C",
    "Radio System",
    "Sun Roof",
  ];

  const handleCheckBoxPress = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setAmenities(selectedAmenities.filter(item => item !== amenity));
    } else {
      setAmenities([...selectedAmenities, amenity]);
    }
  };

  return (
    <View style={{ gap: 20 }}>
      <Text
        style={{
          fontWeight: "800",
          fontSize: 20,
          textAlign: "left",
          marginTop: 30,
        }}
      >
        Vehicle Amenities
      </Text>
      <Text
        style={{
          textAlign: "left",
          fontSize: 18,
          flexWrap: "wrap",
        }}
      >
        Discover the vehicle amenities
      </Text>
      <View>
        <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10 }}>
          Preference Amenities
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: "#FAFAFA",
            paddingHorizontal: 30,
            paddingVertical: 10,
            gap: 25,
            borderRadius: 10,
            height: 300,
            shadowColor: "black",
            elevation: 10,
            margin: 20,
          }}
        >
          {Amenities.map((amenity, index) => (
            <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 20, margin: 15, width: 154 }}>
                {amenity}
              </Text>
              <CheckBoxItem
                step={amenity}
                checked={selectedAmenities.includes(amenity)}
                onPress={() => handleCheckBoxPress(amenity)}
              />
            </View>
          ))}
        </ScrollView>
        
        <TouchableOpacity onPress={goToNextStep} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: "#0078A1",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    marginTop: 30,
  },
  nextButtonText: {
    color: "#FFF",
    fontWeight: "700",
  },
});

export default ApproveDocumentUseScreen;
