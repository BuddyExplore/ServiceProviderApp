import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: '700',
          marginTop: 15,
        },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#ffffff',        
          elevation: 0, // Remove shadow on Android
          borderTopWidth: 0
        }, 
        tabBarLabelStyle: {
          marginBottom: 10,
          fontSize: 14
        },
      }}
    >
      <Tabs.Screen
        name="Overview"
        options={{
          tabBarLabel: "Overview",
          tabBarIcon: ({ color }) => (
            <Entypo name="compass" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ManageTab"
        options={{
          headerTitle: 'Manage',
          tabBarLabel: "Manage",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Orders"
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper-outline" size={24} color={color} />
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
  )
}

export default TabLayout

const styles = StyleSheet.create({})