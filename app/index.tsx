import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import Login from "../components/Login";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View>
      <Login />
    </View>
  )
  
   
}
