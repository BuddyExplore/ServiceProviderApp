import { View, ScrollView, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import Header from "../../components/Shop/ManageHeader"
import Filter from "../../components/Shop/FilterItems"
import ItemList from "../../components/Shop/itemList"

export default function Manage() {
 
  return (
    <View>
      <Header />
      <Filter />
      <ItemList />

      <Text>ShopManager</Text>
      <Text>ShopManager</Text>
      <Text>ShopManager</Text>
      <Text>ShopManager</Text>
      <Text>ShopManager</Text>
      <Text>ShopManager</Text>
      <Text>ShopManager</Text>
      <Text>ShopManager</Text>
    </View>
  );
}

