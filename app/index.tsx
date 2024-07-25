import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import Login from "./../components/Login";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
        <Text>Hello</Text>
        <Login />  
      
      
    </View>
  );
  
  // return <Redirect href={'/(auth)'} />
}
