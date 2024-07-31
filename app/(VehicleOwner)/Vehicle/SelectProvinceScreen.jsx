import { Text, StyleSheet, View, ScrollView } from "react-native";
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

  return (
    <View style={{ gap: 20 }}>
      <Text
        style={{
          fontWeight: "800",
          fontSize: 18,
          textAlign: "left",
        }}
      >
        Select Province
      </Text>
      <Text
        style={{
          textAlign: "left",
          fontSize: 18,
          flexWrap: "wrap",
          width: 280,
        }}
      >
        Pick your Province for tailored driving opportunities.
      </Text>
      <View>
        <Text style={{ fontSize: 16 }}>Preference Province</Text>
        {/* <SearchBarComponent /> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: "#FAFAFA",
            paddingHorizontal: 30,
            paddingVertical: 10,
            gap: 25,
            borderRadius: 10,
            height: 256,
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
                checked={selectedProvince === province}
                onPress={() => {
                  setProvince(province);
                  goToNextStep();
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default SelectProvinceScreen;

const styles = StyleSheet.create({});
