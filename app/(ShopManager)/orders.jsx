import { View, Text , ScrollView, StyleSheet} from 'react-native'
import React, {useState}from 'react'
import Header from "../../components/Shop/OrderHeader"
import Filter from "../../components/Shop/FilterOrders"
import OrderList from "../../components/Shop/OrderList"
export default function shop() {

  return (
    <View>
      <Header />
      <Filter />
      <OrderList />
      <Text>shop</Text>
    </View>
  )
}
