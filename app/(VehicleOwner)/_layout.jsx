import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        // tabBarStyle: route.name === 'Assignment' ? { display: 'none' } : {},
      })}
    >
      {/* <Tabs.Screen
        name="Assignment"
        options={{
          tabBarLabel: "ongoing",
          tabBarIcon: ({ color }) => (
            <Ionicons name="map-outline" size={24} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="Dashboard"
        options={{
          tabBarLabel: "Overview",
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass-outline" size={24} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="Assignment"
        options={({ route }) => ({
          tabBarStyle: getTabBarStyle(route),
          tabBarLabel: "booking",
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" size={22} color={color} />
            // <Ionicons name="map-outline" size={24} color={color} />
          ), // Dynamic tab bar visibility based on route
        })}
      /> */}
      <Tabs.Screen
        name="Assignment"
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-clear-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Vehicle"
        options={{
          tabBarLabel: "Manage",
          tabBarIcon: ({ color }) => (
            <Ionicons name="car-outline" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

function getTabBarStyle(route) {
  // Get the current route name
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Home";

  // Hide tab bar on any screen that is not the index screen ('Home')
  if (routeName !== "Home") {
    return { display: "none" }; // Hide tab bar
  }

  return { display: "flex" }; // Show tab bar
}
