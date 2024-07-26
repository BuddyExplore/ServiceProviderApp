import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
         tabBarActiveTintColor:Colors.PRIMARY
    }}>
        
        
        <Tabs.Screen name='Assignment' options={{
          tabBarLabel:"Assignment",
          tabBarIcon:({color}) => <MaterialIcons name="assignment" size={24} color={color} />
        }}/>
                <Tabs.Screen name='Dashboard' options={{
          tabBarLabel:"Dashboard",
          tabBarIcon:({color}) => <Ionicons name="compass-outline" size={24} color={color} />
        }}/>
        <Tabs.Screen name='Profile' options={{
          tabBarLabel:"Profile",
          tabBarIcon:({color}) => <Ionicons name="people-circle-outline" size={24} color={color} />
        }}/>

    </Tabs>
  )
}
