import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors'

import ManageScreen from './manage';
import OrdersScreen from './orders';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
         tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tabs.Screen name='manage' options={{
          tabBarLabel:"Manage",
          tabBarIcon:({color}) => <Ionicons name="settings-outline" size={24} color={color} />
        }}/>
        
        <Tabs.Screen name='orders' options={{
          tabBarLabel:"Orders",
          tabBarIcon:({color}) => <Ionicons name="bag-outline" size={24} color={color} />
        }}/>
        <Tabs.Screen name='profile' options={{
          tabBarLabel:"Profile",
          tabBarIcon:({color}) => <Ionicons name="people-circle-outline" size={24} color={color} />
        }}/>
        <Tabs.Screen name='AddItems' options={{
          // This tab will no longer show up in the tab bar.
          href: null,
          tabBarStyle: { display: 'none' }, // Hide tab bar for this screen
        }}/>

    </Tabs>
  )
}

//just for commit