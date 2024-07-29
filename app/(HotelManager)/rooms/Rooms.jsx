import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/Hotel/Header'
import RoomList from '../../../components/Hotel/rooms/RoomsList.jsx'

const Rooms = () => {
  return (
    <View>
      <Header subText={'Manage'} mainText={'Your Rooms'} />
      <RoomList />
    </View>
  )
}

export default Rooms

const styles = StyleSheet.create({})