import { View, ScrollView, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import Header from "../../components/Shop/ManageHeader"
import Filter from "../../components/Shop/FilterItems"
import ItemList from "../../components/Shop/itemList"
import Shops from "../../components/Shop/Shops"
import RegisterShop from '../../components/Shop/RegisterShop';

export default function Manage() {
  
  const [shopPressed, setShopPressed] = useState(false);

  const handleShopOpen = () => {
    setShopPressed(true);
  }

  const handleShopClose = () => {
    setShopPressed(false);
  }

  const item1 = {Name : 'Siraj Preena', Text : 'Manage your shops', Placeholder: 'Search for your shops..'}
  const item2 = {Name : 'Royal Batiks', Text : 'Manage your shop' , Placeholder: 'Search your items..'}

  return (
    <View>

      
      {/* <Header headerItems={item1} /> */}
      {!shopPressed && <Header headerItems={item1} />}
      {!shopPressed && <Shops onPress1={handleShopOpen}/>}
      {shopPressed && <Header headerItems={item2} />}
      {shopPressed && <Filter backPressed={handleShopClose}/>}
      {shopPressed && <ItemList />}
      {/* <Filter />
      <ItemList /> */}

      

    </View>
  );
}

