import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const OrdersLayout = () => {
  return (
    <Stack screenOptions={{
      headerShadowVisible: false,
      headerStyle: {
        height: 120,
      },
      headerTitleAlign: 'center', // Optional: Center-align the title
      headerTitleStyle: {
        marginTop: 20, // Push the title down
        fontSize: 20, // Adjust font size if needed
        fontWeight: '700',
      },
    }}>
      <Stack.Screen name="OrderDetails" options={{headerTitle: "Order Details"}}/>
    </Stack>
  )
}

export default OrdersLayout

const styles = StyleSheet.create({})