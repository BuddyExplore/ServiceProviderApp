import { View, ScrollView, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import Header from "../../../components/Hotel/Header"
import OptionsList from "../../../components/Hotel/OptionsList"
import { useRouter } from 'expo-router';

export default function Dashboard() {
  

  return (
    <View>
      <Header subText={'Hey FabZeke Hotel !'} mainText={'Dashboard'}/>
      <OptionsList />

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

