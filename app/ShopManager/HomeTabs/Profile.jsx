import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Profile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Pressable onPress={() => router.push("ShopManager/Profile")}>
        <Text>Press Me</Text>
      </Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  }
})