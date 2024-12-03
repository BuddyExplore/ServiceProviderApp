import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import BASE_URL from '../../constants/globals';

const ShopList = (shop) => {
  return (
    <>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={{uri: `${BASE_URL}/${shop.coverImage}`}} />
      </View>

      <View style={styles.title}>
        <Text style={styles.titleName}>{shop.name}</Text>
        <Text style={styles.titleItems}>{shop.itemCount} products</Text>
      </View>

      <View style={styles.rightIcon}>
        <AntDesign name="right" size={22} color="black" />
      </View>
    </>
  )
}

export default ShopList

const styles = StyleSheet.create({
  imgContainer: {
    height: '100%',
    width: '35%',
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  title: {
    justifyContent: 'center',
    gap: 5,
    marginLeft: 12
  },
  titleName: {
    fontSize: 15,
    fontWeight: '500'
  },
  titleItems: {
    fontSize: 12
  },
  rightIcon: {
    marginLeft: '33%',
    justifyContent: 'center'
  }
})