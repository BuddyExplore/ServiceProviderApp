import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
         tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tabs.Screen name='Dashboard' options={{
          tabBarLabel:"Dashboard",
          tabBarIcon:({color}) => <MaterialIcons name="dashboard" size={24} color={color} />
        }}/>
        
        <Tabs.Screen name='Notifications' options={{
          tabBarLabel:"Notifications",
          tabBarIcon:({color}) => <Ionicons name="notifications" size={24} color={color} />
        }}/>
        
        <Tabs.Screen name='Profile' options={{
          tabBarLabel:"Profile",
          tabBarIcon:({color}) => <Ionicons name="people-circle-outline" size={24} color={color} />
        }}/>

    </Tabs>
  )
}
