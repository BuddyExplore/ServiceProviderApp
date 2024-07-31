import { Stack } from "expo-router";

export default function VehicleLayout() {
  return (
    <Stack
      initialRouteName="Payment1"
      screenOptions={{
        headerShown: true,
        headerBackButtonMenuEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Vehicles" options={{}} />
      <Stack.Screen name="AddVehicle" options={{}} />
      <Stack.Screen name="SelectVehicleScreen" options={{}} />
      <Stack.Screen name="SelectProvinceScreen" options={{}} />
    </Stack>
  );
}
