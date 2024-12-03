import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const OverviewLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
      }}
    >
    <Stack.Screen name="OverviewHome" />
    </Stack>
  )
}

export default OverviewLayout

const styles = StyleSheet.create({})