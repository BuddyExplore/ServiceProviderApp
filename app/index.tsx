import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import Login from "../app/(auth)/Login";
import { SafeAreaView } from "react-native-safe-area-context";
// import Login from '../components/Login';

export default function Index() {
  return <Redirect href={'/Login'} />
  // return (
  //   <Login />
  // )
  
   
}
