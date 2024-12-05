import { StyleSheet, Text, View, Pressable, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import ShopList from '../../../components/ShopManager/ShopList'
import { Colors } from '../../../constants/Colors'
import axios from 'axios';
import BASE_URL from '../../../constants/globals';
import AntDesign from '@expo/vector-icons/AntDesign';
import {AuthContext} from '../../../context/AuthContext';

// const shops = [
//   {id: 1, name: 'Laksala', img: require('../../../../assets/images/Shop/shop.jpg'), itemCount: 21},
// ]

const ManageTab = () => {
  const {user} = useContext(AuthContext)
  const router = useRouter(); 

  const [shops, setShops] = useState([]);

  useEffect(() => {

    const fetchShops = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/travel/shop/allShopsByOwnerID/${user.id}`);
        console.log(response.data);
        setShops(response.data); 
      } catch (err) {
        console.error("Error fetching shops:", err);
      }
    }

    fetchShops();

  }, [])


  const handleRegister = () => {
    router.push("ShopManager/Manage/RegisterShopDetails")
  }

  const handlePress = (index) => {
    router.push({
      pathname: '../Manage/ShopDetails',
      params: {
        shopID: shops[index].id,
        shopName: shops[index].name,
        userID: user.id
      }
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.headerText}>Your Shops</Text>
        </View>

        <TouchableOpacity style={styles.headerBtn} onPress={handleRegister}>
          <Text style={styles.headerBtnText}>Register Shop</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.shopListContainer}>

        {shops.length > 0 ? (
          <FlatList 
            data={shops}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity style={styles.shopListItem} onPress={() => handlePress(index)}>
                <View style={styles.imgContainer}>
                  <Image style={styles.image} source={{uri: `${BASE_URL}/${item.coverImage}`}} />
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.title}>
                  <Text style={styles.titleName}>{item.name}</Text>
                  <Text style={styles.titleItems}>{item.itemCount} products</Text>
                </View>
                </View>

                <View style={styles.rightIcon}>
                  <AntDesign name="right" size={22} color="black" />
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 26, fontWeight: '700', color: '#878787'}}>Add Shops</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default ManageTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 20
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600'
  },
  headerBtn: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 25
  },
  headerBtnText: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center'
  },
  shopListContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    paddingHorizontal: 5
  },
  shopListItem: {
    display: 'flex',
    flexDirection: 'row',
    height: 90,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15
  },
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
    justifyContent: 'center'
  }
})