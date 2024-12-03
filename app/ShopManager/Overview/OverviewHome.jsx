import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OverviewHome = () => {
  return (
    <View style={styles.container}>
      <Text>Overview Home</Text>
    </View>
  )
}

export default OverviewHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  }
})