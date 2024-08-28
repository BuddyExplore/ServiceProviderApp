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
      <Stack.Screen name="index" options={{headerBackButtonMenuEnabled: true,  headerShown: true}} />
      <Stack.Screen name="incoming" options={{headerBackButtonMenuEnabled: true,  headerShown: true}} />
    </Stack>
    
  );
}
