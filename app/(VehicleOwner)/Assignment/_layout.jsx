import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileLayout() {
  return (
    <Stack
      initialRouteName="Payment1"
      screenOptions={{
        headerShown: true,
        headerBackButtonMenuEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen
        name="RequestDetail"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
