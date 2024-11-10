import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'

const Test1 = () => {
  const router = useRouter();

  return (
    <View>
      <Text>test1</Text>
      <TouchableOpacity onPress={() => router.push('/ShopManager/ShopManagerHome')}><Text>Click here to go to index</Text></TouchableOpacity>
    </View>
  )
}

export default Test1

const styles = StyleSheet.create({})