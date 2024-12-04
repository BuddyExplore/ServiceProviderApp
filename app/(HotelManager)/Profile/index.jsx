import {
  Button,
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useLogout } from "../../../hooks/useLogout";
import React, { Component } from "react";
import { Redirect, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Vehicle/ManageHeader";
import { Colors } from "../../../constants/Colors";
import { EvilIcons, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

let userdetail = { name: "Isuka", rating: 4.6 };
const SelectButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        width: Dimensions.get("screen").width,
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 5,
        elevation: 5,
        marginBottom: 3,
      }}
      onPress={props.onPress}
    >
      {props.title == "Profile" ? (
        <EvilIcons
          color={props.title != "Signout" ? "black" : "red"}
          size={40}
          name="user"
        />
      ) : props.title == "Payment" ? (
        <MaterialIcons
          color={props.title != "Signout" ? "black" : "red"}
          size={30}
          name="payment"
        />
      ) : (
        <Ionicons
          color={props.title != "Signout" ? "black" : "red"}
          size={30}
          name="log-out-outline"
        />
      )}

      <Text
        style={{
          color: props.title != "Signout" ? "black" : "red",
          fontSize: 20,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
const handleSignout = (navigation, logout, router) => {
  Alert.alert(
    "Sign out",
    "Are you sure?",
    [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          logout;
          router.replace("../Login");
        },
      },
    ],
    { cancelable: true }
  );
};
const ProfileView = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.PRIMARY + "AA",
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height / 2.5,
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Image
          source={require("../../../assets/images/Shop/shop.png")}
          n
          style={{
            width: 100,
            height: 100,
            backgroundColor: "white",
            borderRadius: 120,
          }}
        />
      </View>
      <Text style={{ color: "white", fontSize: 30 }}>{userdetail.name}</Text>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: "white" }}>
          {userdetail.rating}
          <Ionicons size={18} name="star" />
        </Text>
        <Text style={{ color: "white" }}>Rating</Text>
      </View>
    </View>
  );
};

export default function Index() {
  const router = useRouter();
  const navigation = useNavigation();
  const logout = useLogout();
  return (
    <SafeAreaView>
      <View>
        <ProfileView />

        <SelectButton
          title="Profile"
          color={"#ddd"}
          onPress={() => navigation.navigate("ProfileDetails")}
        />
        <SelectButton
          title="Payment"
          color={"#ddd"}
          onPress={() => navigation.navigate("Payment")}
        />
        <SelectButton
          title="Availability"
          color={"#ddd"}
          onPress={() => navigation.navigate("availability")}
        />
        <SelectButton
          title="Signout"
          color={"#ddd"}
          onPress={() => {
            handleSignout(navigation, logout, router);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
