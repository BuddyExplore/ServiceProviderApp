import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { Stack, Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

const TabLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTabs"/>
      <Stack.Screen name="Overview"/>
      <Stack.Screen name="Manage"/>
      <Stack.Screen name="Orders"/>
      <Stack.Screen name="Profile"/>
    </Stack>
  )
}

export default TabLayout

const styles = StyleSheet.create({})