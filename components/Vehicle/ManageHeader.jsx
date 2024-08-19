import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "expo-router";

export default function Header(props) {
  const [selectedMonth, setSelectedMonth] = useState("August");
  const navigation = useNavigation();

  const months = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  return (
    <View style={styles.headerContainer}>
      <View style={styles.topRow}>
        <Image
          source={require("./../../assets/images/Shop/shop.png")}
          style={styles.avatar}
        />

        <RNPickerSelect
          onValueChange={(value) => setSelectedMonth(value)}
          items={months}
          value={selectedMonth}
          style={{
            inputAndroid: styles.dropdownInput,
          }}
          Icon={() => (
            <FontAwesome
              name="chevron-down"
              size={12}
              color="black"
              style={styles.dropdownIcon}
            />
          )}
        >
          <TouchableOpacity style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>{selectedMonth}</Text>
            <FontAwesome
              name="chevron-down"
              size={12}
              color="black"
              style={styles.dropdownIcon}
            />
          </TouchableOpacity>
        </RNPickerSelect>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            navigation.navigate("Notification");
          }}
        >
          <FontAwesome
            name="bell"
            size={24}
            color={Colors.PRIMARY}
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Account Balance</Text>
        <Text style={styles.balanceAmount}>Rs.6200</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: Colors.PRIMARY,
    borderWidth: 3,
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    width: 130,
    marginHorizontal: 70,
    borderColor: Colors.PRIMARY,
    borderWidth: 2,
  },
  dropdownInput: {
    flex: 1,
    justifyContent: "center",
  },
  dropdownText: {
    color: "black",
    fontWeight: "500",
    marginRight: 5,
    flex: 1,
  },
  dropdownIcon: {
    marginLeft: "auto",
  },
  bellIcon: {
    marginLeft: "auto",
    color: Colors.PRIMARY,
  },
  balanceContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  balanceLabel: {
    color: "#999999",
    fontSize: 16,
    marginBottom: 5,
  },
  balanceAmount: {
    color: "#000",
    fontSize: 32,
    fontWeight: "bold",
  },
});
