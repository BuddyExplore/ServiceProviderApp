import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import CheckBoxItem from "../../../components/Vehicle/CheckBox";

const SelectProvinceScreen = ({
  setProvince,
  selectedProvince,
  goToNextStep,
}) => {
  const Provinces = [
    "Central",
    "Eastern",
    "North Central",
    "Northern",
    "North Western",
    "Sabaragamuwa",
    "Southern",
    "Uwa",
    "Western",
  ];

  const handleCheckBoxPress = (province) => {
    if (selectedProvince.includes(province)) {
      setProvince(selectedProvince.filter((item) => item !== province));
    } else {
      setProvince([...selectedProvince, province]);
    }
  };

  return (
    <View style={{ gap: 20 }}>
      <Text
        style={{
          fontWeight: "800",
          fontSize: 20,
          textAlign: "left",
          marginTop: 60,
        }}
      >
        Vehicle Oasis
      </Text>
      <Text
        style={{
          textAlign: "left",
          fontSize: 18,
          flexWrap: "wrap",
        }}
      >
        Discover the vehicle oasis
      </Text>
      <View>
        <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10 }}>
          Preference Provinces
        </Text>
        {/* <SearchBarComponent /> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: "#FAFAFA",
            paddingHorizontal: 30,
            paddingVertical: 10,
            gap: 25,
            borderRadius: 10,
            height: 150,
            shadowColor: "black",
            elevation: 10,
            margin: 20,
          }}
        >
          {Provinces.map((province, index) => (
            <View key={index} style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 20, margin: 15, width: 154 }}>
                {province}
              </Text>
              <CheckBoxItem
                step={province}
                checked={selectedProvince.includes(province)}
                onPress={() => handleCheckBoxPress(province)}
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


export default SelectProvinceScreen;
