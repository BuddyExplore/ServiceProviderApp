import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { useRouter } from 'expo-router'
import {Colors} from '../../../constants/Colors'

const shop =  {
  id: 1,
  name : 'Laksala',
  items: [
    {id: 1, name: 'Batik Shirt', price: 5000.00},
    {id: 2, name: 'Saree', price: 2250.00},
    {id: 3, name: 'Batik Shirt', price: 5000.00},
    {id: 4, name: 'Saree', price: 2250.00},
    {id: 5, name: 'Batik Shirt', price: 5000.00},
    {id: 6, name: 'Saree', price: 2250.00},
    {id: 7, name: 'Batik Shirt', price: 5000.00},
    {id: 8, name: 'Saree', price: 2250.00},
    {id: 9, name: 'Batik Shirt', price: 5000.00},
    {id: 10, name: 'Saree', price: 2250.00},
    {id: 11, name: 'Batik Shirt', price: 5000.00},
    {id: 12, name: 'Saree', price: 2250.00},
    {id: 13, name: 'Batik Shirt', price: 5000.00},
    {id: 14, name: 'Saree', price: 2250.00},
    {id: 15, name: 'Batik Shirt', price: 5000.00},
    {id: 16, name: 'Saree', price: 2250.00},
    {id: 17, name: 'Batik Shirt', price: 5000.00},
    {id: 18, name: 'Saree', price: 2250.00},
    {id: 19, name: 'Batik Shirt', price: 5000.00},
    {id: 20, name: 'Saree', price: 2250.00},
  ]
}

const Orders = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <View style={styles.container}>
      
      <View style={styles.filterContainer}>
        <View style={styles.filter}>
        <TouchableOpacity onPress={() => setActiveFilter('All')} style={{paddingVertical: 7, paddingHorizontal: 20, borderRadius: 20, backgroundColor: activeFilter === 'All' ? Colors.PRIMARY : '#fff'}}>
          <Text style={{color: activeFilter === 'All' ? '#fff' : 'black', fontWeight: '600'}}>All</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.filter}>
        <TouchableOpacity onPress={() => setActiveFilter('Ongoing')} style={{paddingVertical: 7, paddingHorizontal: 20, borderRadius: 20, backgroundColor: activeFilter === 'Ongoing' ? Colors.PRIMARY : '#fff'}}>
          <Text style={{color: activeFilter === 'Ongoing' ? '#fff' : 'black', fontWeight: '600'}}>Ongoing</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.filter}>
        <TouchableOpacity onPress={() => setActiveFilter('Completed')} style={{paddingVertical: 7, paddingHorizontal: 20, borderRadius: 20, backgroundColor: activeFilter === 'Completed' ? Colors.PRIMARY : '#fff'}}>
          <Text style={{color: activeFilter === 'Completed' ? '#fff' : 'black', fontWeight: '600'}}>Completed</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.itemListContainer}>
        <FlatList 
          data={shop.items}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
              <View style={{height: 75 , width: 100, borderRadius: 10}}>
                <Image source={require('../../../assets/images/Shop/shop.jpg')} style={{maxWidth: '100%', maxHeight: '100%', borderRadius: 10}}/>
              </View>
      
              <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{marginLeft: 22, gap: 5}}>
                  <Text style={{fontSize: 14, fontWeight: '500'}}>{item.name}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 12, color: '#878787'}}>{`LKR ${item.price}.00`}</Text>
                  </View>
                </View>
      
                <View style={{justifyContent: 'center', alignItems: 'center', borderRadius: 40, backgroundColor: "#E2F8FF", paddingHorizontal: 10, paddingVertical: 5, marginRight: 10}}>
                  <Text style={{fontSize: 10, color: Colors.PRIMARY}}>Picked</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  filterContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 10
  },
  filter: {
    marginLeft: 15,
  },
  itemListContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    paddingHorizontal: 5
  },
})