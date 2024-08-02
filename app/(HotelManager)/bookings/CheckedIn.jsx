import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Header from '../../../components/Hotel/Header'
import BookingCard from '../../../components/Hotel/BookingCard';

const bookingData = [
    {
      bookingId: "004",
      guestName: "Kavishka Yapa",
      checkInDate: "2024-08-09",
      checkOutDate: "2024-08-12",
      roomNumber: "101",
      status: "Checked In"
    },
    {
      bookingId: "005",
      guestName: "Isuka Premathilake",
      checkInDate: "2024-08-10",
      checkOutDate: "2024-08-11",
      roomNumber: "102",
      status: "Checked In"
    }
  ];


const CheckedIn = () => {
  return (
    <View>
      <Header mainText={"Checked In"} />
      <ScrollView>
        <FlatList
            data={bookingData}
            keyExtractor={item => item.bookingId}
            renderItem={({ item }) => <BookingCard booking={item} />}
          />
      </ScrollView>
    </View>
  )
}

export default CheckedIn

const styles = StyleSheet.create({})