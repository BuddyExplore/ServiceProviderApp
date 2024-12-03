import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Overview = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Overview</Text>
      <Pressable onPress={() => router.push("ShopManager/Overview")}>
        <Text>Press Me</Text>
      </Pressable>
    </View>
  )
}

export default Overview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  }
})