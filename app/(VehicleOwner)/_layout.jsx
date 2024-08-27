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
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Assignment"
        options={{
          tabBarLabel: "booking",
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" size={24} />
            // <Ionicons name="map-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Vehicle"
        options={{
          tabBarLabel: "Manage",
          tabBarIcon: ({ color }) => (
            <Ionicons name="car-outline" size={24} color={color} />
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
