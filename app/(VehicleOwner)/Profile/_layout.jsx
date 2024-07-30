import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileLayout() {
  return (
    <Stack
      // initialRouteName='ProfileDetails'
      screenOptions={{
        headerShown: true,
        headerBackButtonMenuEnabled: true,
        headerShown: true,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Payment" options={{}} />
      <Stack.Screen name="ProfileDetails" options={{ title: "Profile" }} />
    </Stack>
  );
}
