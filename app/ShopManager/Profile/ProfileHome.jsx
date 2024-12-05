import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileHome = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileHome</Text>
    </View>
  )
}

export default ProfileHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  }
})