import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: true,
        headerBackButtonMenuEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen
        name="requestdetails"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="incoming"
        options={{
          title: "Incoming Requests",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
