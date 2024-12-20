import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "./Custom/CustomInput";
import CustomButton from "./Custom/CustomButton";
import SocialButtons from "./Custom/SocialButtons";
import { useLogin } from "../../hooks/useLogin";
import { useRouter, useNavigation } from "expo-router";

const Login = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { error, loading, handleLogin } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPressed = async (e) => {
    e.preventDefault();
    if (e) {
      console.log(email + "" + password);
    }
    // router.replace("../dashboard");
    // router.replace("../manage");
    const result = await handleLogin(email, password);

    if (result.ok) {
      switch (result.role) {
        case "VEHICLE_OWNER":
          router.replace("../Dashboard/DashboardDetails");
          break;
        case "TOUR_GUIDE":
          router.replace("../dashboard");
          break;
        case "HOTEL_MANAGER":
          router.replace("../home/Dashboard");
          break;
        case "SHOP_MANAGER":
          router.replace("../ShopManager");
          break;
        /*case "ACTIVITY_HOST":
          router.replace("../(ActivityHost)/home/Dashboard");
          break;*/
        //default:
        //router.replace("/DefaultDashboard");
      }
    } else {
      alert(result.message);
    }
  };

  const [isPasswordShown, setIsPasswordShown] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Image
            // tintColor={"black"}
            source={require("../../assets/images/logo.png")}
            style={{
              width: 120,
              height: 110,
            }}
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: 24,
              //fontWeight: "bold",
              color: "black",
              marginVertical: 20,
            }}
          >
            Login
          </Text>

          <View style={{ marginBottom: 12 }}>
            <Text style={styles.inputTextTop}>Email Address</Text>

            <CustomInput
              placeholder="Enter your email address"
              placeholderTextColor="black"
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
              setValue={setEmail}
            />
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={styles.inputTextTop}>Password</Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="black"
                secureTextEntry={isPasswordShown}
                style={{
                  width: "100%",
                  borderWidth: 0,
                }}
                onChangeText={setPassword}
              />

              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {isPasswordShown == true ? (
                  <Ionicons name="eye" size={24} color="black" />
                ) : (
                  <Ionicons name="eye-off" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}
          >
            <TouchableOpacity
              onPress={() => router.replace("/ForgotPassword")}
              style={{
                fontSize: 16,
                color: "black",
              }}
            >
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            title="Log in"
            filled
            style={{
              backgroundColor: "black",
              borderColor: "black",
              marginTop: 18,
              marginBottom: 4,
            }}
            onPress={onLoginPressed}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 12,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "gray",
                marginHorizontal: 10,
                marginVertical: 20,
              }}
            />

            <Text style={{ fontSize: 14 }}>or Log in with</Text>

            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "gray",
                marginHorizontal: 10,
              }}
            />
          </View>

          <SocialButtons />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}
          >
            <Text>Dont have an account?</Text>
            <TouchableOpacity
              onPress={() => router.replace("/Signup")}
              style={{
                fontSize: 16,
                color: "gray",
              }}
            >
              <Text>Create one</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputTextTop: {
    fontSize: 16,
    //fontWeight: 400,
    marginVertical: 8,
  },
  link: {
    color: Colors.PRIMARY,
  },
});

export default Login;