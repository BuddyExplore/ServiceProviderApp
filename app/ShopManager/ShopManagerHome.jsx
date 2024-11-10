import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'

const ShopManagerHome = () => {
  const router = useRouter();

  return (
    <View>
      <Text>ShopManagerHome</Text>
      <TouchableOpacity onPress={() => router.push('/ShopManager/Test1')}><Text>Click to go test 1</Text></TouchableOpacity>
    </View>
  )
}

export default ShopManagerHome

const styles = StyleSheet.create({})