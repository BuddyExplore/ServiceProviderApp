import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileLayout() {
  return (
    <Stack
      initialRouteName="Index"
      screenOptions={{
        headerBackButtonMenuEnabled: true,
        backgroundColor: '#ffffff' 
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          cardStyle: { backgroundColor: '#ffffff' },
          headerShown: false,
          headerBackButtonMenuEnabled: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="requestdetails"
        options={{
          title: "Request Details",
          headerShown: true,
          headerBackButtonMenuEnabled: true,
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
      <Stack.Screen
        name="StartRide"
        options={{
          title: "Dipatching",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="TripDetail"
        options={{
          title: "Trip Details",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="EndTrip"
        options={{
          title: "Trip Details",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
