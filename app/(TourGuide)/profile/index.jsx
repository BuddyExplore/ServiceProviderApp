import {
  Button,
  Image,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import { useLogout } from "../../../hooks/useLogout";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../../constants/Colors";
import { EvilIcons, Ionicons, MaterialIcons } from "@expo/vector-icons";

let userdetail = { name: "was", rating: 4.6 };

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
      {props.title === "Profile" ? (
        <EvilIcons color="black" size={40} name="user" />
      ) : props.title === "Payment" ? (
        <MaterialIcons color="black" size={30} name="payment" />
      ) : (
        <Ionicons color="red" size={30} name="log-out-outline" />
      )}
      <Text
        style={{
          color: props.title === "Signout" ? "red" : "black",
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
      { text: "No", style: "cancel" },
      {
        text: "Yes",
        onPress: () => {
          logout();
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
          color="#ddd"
          icon={<EvilIcons color="black" size={40} name="user" />}
          onPress={() => navigation.navigate("ProfileScreen")}
        />
        <SelectButton
          title="Payment"
          color="#ddd"
          icon={<MaterialIcons color="black" size={30} name="payment" />}
          onPress={() => navigation.navigate("payments")}
        />
        <SelectButton
          title="Availability"
          color="#ddd"
          icon={<Ionicons color="black" size={30} name="calendar-outline" />}
          onPress={() => navigation.navigate("availability")}
        />
        <SelectButton
          title="Feedbacks"
          color="#ddd"
          icon={<MaterialIcons color="black" size={30} name="feedback" />}
          onPress={() => navigation.navigate("feedbacks")}
        />
        <SelectButton
          title="Messages"
          color="#ddd"
          icon={<MaterialIcons color="black" size={30} name="message" />}
          onPress={() => navigation.navigate("messages")}
        />
        <SelectButton
          title="Notifications"
          color="#ddd"
          icon={
            <Ionicons color="black" size={30} name="notifications-outline" />
          }
          onPress={() => navigation.navigate("notifications")}
        />
        <SelectButton
          title="Trip Details"
          color="#ddd"
          icon={<Ionicons color="black" size={30} name="car-outline" />}
          onPress={() => navigation.navigate("TripDetails")}
        />
        <SelectButton
          title="Signout"
          color="#ddd"
          icon={<Ionicons color="red" size={30} name="log-out-outline" />}
          onPress={() => handleSignout(logout, router)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
