import { Stack } from "expo-router";

export default function VehicleLayout() {
  return (
    <Stack
      initialRouteName="Payment1"
      screenOptions={{
        headerShown: true,
        headerBackButtonMenuEnabled: true,
        // headerShown: false,
      }}
    >
      <Stack.Screen name="DashboardDetails" options={{}} />
      <Stack.Screen name="TripDetails" options={{}} />
    </Stack>
  );
}
