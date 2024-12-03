import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ManageLayout = () => {
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
      <Stack.Screen name="RegisterShopDetails" options={{ title: "Register Shop"}}/>
      <Stack.Screen name="ShopDetails" />
      <Stack.Screen name="AddItem" options={{ title: "Add Item" }}/>
      <Stack.Screen name="ItemDetails" options={{title: "Item Details" }}/>
      <Stack.Screen name="EditItem" options={{ title: "Update Item" }}/>
      <Stack.Screen name="UpdateCover" options={{ title: "Update Cover" }}/>
    </Stack>
  )
}

export default ManageLayout

const styles = StyleSheet.create({})