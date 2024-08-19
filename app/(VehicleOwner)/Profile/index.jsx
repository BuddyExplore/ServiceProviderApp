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
import { Ionicons} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

let userdetail = { name: "Shaf", rating: 4.6 };
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
        gap: 20,
        elevation: 5,
        marginBottom: 20,
      }}
      onPress={props.onPress}
    >
      {props.title == "Profile" ? (
        <Ionicons
          color={props.title != "Signout" ? "black" : "red"}
          size={30}
          name="person-circle-outline"
        />
      ) : props.title == "Payment" ? (
        <Ionicons
          color={props.title != "Signout" ? "black" : "red"}
          size={30}
          name="card-outline"
        />
      ) : props.title == "Support" ? (
        <Ionicons
          color={props.title != "Signout" ? "black" : "red"}
          size={30}
          name="settings-outline"
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
        backgroundColor: Colors.PRIMARY ,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height / 2.5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Image
          source={require("../../../assets/images/Shop/shop.png")}
          style={{
            width: 90,
            height: 90,
            backgroundColor: "white",
            borderRadius: 120,
          }}
        />
      </View>
      <Text style={{ color: "white", fontSize: 30 }}>{userdetail.name}</Text>
      <View style={{ alignItems: "center", marginTop:20 }}>
        <Text style={{ fontSize: 20, color: "white" }}>
          {userdetail.rating}
          <Ionicons size={20} name="star" color="yellow"/>
        </Text>
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
          color={"#fff"}
          onPress={() => navigation.navigate("ProfileDetails")}
        />
        <SelectButton
          title="Payment"
          color={"#fff"}
          onPress={() => navigation.navigate("Payment")}
        />
        <SelectButton
        title="Support"
        color={"#fff"}
        onPress={() => navigation.navigate("Support")}
      />
        <SelectButton
          title="Signout"
          color={"#fff"}
          onPress={() => {
            handleSignout(navigation, logout, router);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
