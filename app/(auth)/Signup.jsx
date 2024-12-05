import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "./Custom/CustomInput";
import CustomButton from "./Custom/CustomButton";
import SocialButtons from "./Custom/SocialButtons";
import { useSignup } from "../../hooks/useSignup";
import Checkbox from "expo-checkbox";
import { useRouter, useNavigation } from "expo-router";
import RNPickerSelect from "react-native-picker-select";
import { color } from "react-native-elements/dist/helpers";

const Signup = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { error, loading, handleSignup } = useSignup();

  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const onSignupPressed = async (e) => {
    e.preventDefault();


    if(!isChecked) {
      alert("Please agree to the terms and conditions !");
      return;
    }

    if(!(first_name && last_name && mobile_no && role && email && password)) {
      alert("Please fill all the fields !");
      return;
    }

    if(password.length < 10) {
      console.log(password)
      alert("Password length should be atleast 10 !");
      return;
    }
    
    const result = await handleSignup(
      first_name,
      last_name,
      mobile_no,
      role,
      email,
      password
    );

    if (result.ok) {

      console.log(result.role);
      alert("Sign up successful !")
      router.replace("/Login");

//       switch (role) {
//         case "VEHICLE_OWNER":
//           router.replace("../Dashboard/DashboardDetails");
//           break;
//         case "TOUR_GUIDE":
//           router.replace("../dashboard");
//           break;
//         case "HOTEL_MANAGER":
//           router.replace("../home/Dashboard");
//           break;
//         case "SHOP_MANAGER":
//           router.replace("../manage");
//           break;
//         /*case "ACTIVITY_HOST":
//           router.replace("../(ActivityHost)/home/Dashboard");
//           break;*/
//         //default:
//         //router.replace("/DefaultDashboard");
//       }
    } else {
      console.error(result.message);
    }
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };
  

  //dropdown select buttons
  const roles = [
    { key: "1", label: "Vehicle Owner", value: "VEHICLE_OWNER" },
    { key: "2", label: "Tour Guide", value: "TOUR_GUIDE" },
    { key: "3", label: "Hotel Manager", value: "HOTEL_MANAGER" },
    { key: "4", label: "Shop Manager", value: "SHOP_MANAGER" },
    { key: "5", label: "Activity Host", value: "ACTIVITY_HOST" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ flex: 1, marginHorizontal: 22, marginVertical: 5 }}>
          <View>
            <Text
              style={{
                fontSize: 24,
                color: "black",
                marginVertical: 12,
              }}
            >
              Create Account
            </Text>

            <Text
              style={{ fontSize: 16, color: Colors.SECOND, marginBottom: 10 }}
            >
              Plan your next adventure with friends today!
            </Text>

            <View
              style={{
                flexDirection: Platform.OS == "web" ? "row" : "column",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginVertical: 6 }}>
                <Text style={styles.inputTextTop}>First Name</Text>

                <CustomInput
                  placeholder="Enter your first name"
                  placeholderTextColor="black"
                  keyboardType="text"
                  style={{
                    width: "100%",
                  }}
                  setValue={setFirstname}
                />
              </View>

              <View style={{ marginVertical: 6 }}>
                <Text style={styles.inputTextTop}>Last Name</Text>

                <CustomInput
                  placeholder="Enter your last name"
                  placeholderTextColor="black"
                  keyboardType="text-input"
                  style={{
                    width: "100%",
                  }}
                  setValue={setLastname}
                />
              </View>
            </View>

            <View style={{ marginVertical: 6 }}>
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

            <View style={{ marginVertical: 6 }}>
              <Text style={styles.inputTextTop}>MobileNumber </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  placeholder="+94"
                  placeholderTextColor="black"
                  keyboardType="numeric"
                  style={{
                    width: "12%",
                    borderRightWidth: 1,
                    borderLeftColor: "gray",
                    height: "100%",
                  }}
                />

                <TextInput
                  placeholder="Enter your phone number"
                  placeholderTextColor="black"
                  keyboardType="numeric"
                  style={{
                    width: "80%",
                  }}
                  value={mobile_no}
                  onChangeText={setMobile_no}
                />
              </View>
            </View>

            <View style={{ marginVertical: 6 }}>
              <Text style={styles.inputTextTop}>Role</Text>

              <RNPickerSelect
                onValueChange={(value) => setRole(value)}
                items={roles}
                style={[
                  {
                    inputIOS: styles.inputIOS,
                    inputAndroid: styles.inputAndroid,
                  },
                ]}
                placeholder={{
                  label: "Select your user role",
                  value: { roles },
                  color: "black",
                }}
              />
            </View>

            <View style={{ marginVertical: 6 }}>
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
                  }}
                  value={password}
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
                marginVertical: 20,
              }}
            >
              <Checkbox
                style={{ marginRight: 8 }}
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? "black" : undefined}
              />

              <Text>
                I agree to the{" "}
                <Text style={styles.link} onPress={onTermsOfUsePressed}>
                  Terms
                </Text>{" "}
                and{" "}
                <Text style={styles.link} onPress={onPrivacyPressed}>
                  Conditions
                </Text>
              </Text>
            </View>

            <CustomButton
              title="Sign up"
              filled
              style={{
                backgroundColor: "black",
                borderColor: "black",
                marginTop: 18,
                marginBottom: 4,
              }}
              onPress={onSignupPressed}
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

              <Text style={{ fontSize: 14 }}>or Sign up with</Text>

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
              <Text>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => router.replace("/Login")}
                style={{
                  fontSize: 16,
                  color: "gray",
                }}
              >
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputTextTop: {
    fontSize: 16,
    color: "black",
    marginBottom: 28,
  },
  inputIOS: {
    width: "100%",
    color: "red",
    borderWidth: 1,
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 10,
    justifyContent: "center",
    padding: "20px",
  },
  inputAndroid: {
    width: "100%",
    color: "red",
    borderWidth: 1,
    borderRadius: 8,
    height: 480,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
});

export default Signup;
