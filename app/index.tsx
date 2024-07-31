import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import Login from "./../components/Login";

export default function Index() {
  return <Redirect href={'/Login'} />
  
   
}
