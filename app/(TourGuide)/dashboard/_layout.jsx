import { Stack } from "expo-router";

export default function TourGuideLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: true,
        headerBackButtonMenuEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="ongoingtrips" options={{ headerShown: true, headerTitle: "Ongoing Trips" }} />
      <Stack.Screen name="completedtrips" options={{ headerShown: true, headerTitle: "Completed Trips" } } />
      <Stack.Screen name="upcomingtrips" options={{ headerShown: true, headerTitle: "Upcoming Trips" }} />
    </Stack>
  );
}
