import { Pressable, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {Colors} from '../../../constants/Colors'
import axios from 'axios';
import BASE_URL from '../../../constants/globals';

const ShopDetails = () => {
  const router = useRouter();

  const { shopID, shopName, userID } = useLocalSearchParams();

  const [activeFilter, setActiveFilter] = useState('All');
  const [shop, setShop] = useState({items: []});
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/travel/shop/${shopID}`);
      const shopData = response.data;
      console.log(shopData);
      setShop(shopData); 
      setFilteredItems(shopData.items); 
    } catch (err) {
      console.error(`Error fetching items for shop ID ${shopID}:`, err.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [shopID])


  const handleBackBtnPress = () => {
    router.replace('../HomeTabs/ManageTab', undefined, { shallow: true });
  }

  const handlePress = (itemID) => {
    
    router.push({
      pathname: "./ItemDetails",
      params: {
        itemID,
        shopID
      }
    })
  }

  const handleAddItem = () => {
    router.push({
      pathname: "./AddItem",
      params: {
        shopID: shopID
      }
    })
  }

  const handleFilter = (filterText) => {
    if(filterText === activeFilter) {
      return;
    }

    if(filterText === 'All') {
      setFilteredItems(shop.items);
    }else if(filterText === 'In-Stock') {
      const newFilteredItems = shop.items.filter((item) => item.is_available === true);
      setFilteredItems(newFilteredItems);
    }else {
      const newFilteredItems = shop.items.filter((item) => item.is_available === false);
      setFilteredItems(newFilteredItems);
    }

    setActiveFilter(filterText);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        <Pressable style={styles.backBtn} onPress={handleBackBtnPress}>
          <Ionicons name="arrow-back-outline" size={26} color="black" />
        </Pressable>
        <Text style={styles.headerText}>{shop.name}</Text>
      </View>

      <View style={styles.countContainer}>
        <View style={{gap: 10}}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Item Count</Text>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Sold Count</Text>
        </View>

        <View style={{gap: 10}}>
          <Text style={{fontSize: 16, fontWeight: '400'}}>{shop.items.length}</Text>
          <Text style={{fontSize: 16, fontWeight: '400'}}>0</Text>
        </View>
      </View>

      <View style={styles.subContainer}>
        <View style={{justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 20}}>
          <Text style={{fontSize: 22, fontWeight: '600'}}>Items</Text>
        </View>

        <TouchableOpacity onPress={handleAddItem} style={{height: '100%', flexDirection: 'row', alignItems:'center', justifyContent: 'flex-end', 
          backgroundColor: Colors.PRIMARY, padding: 12, borderRadius: 30, marginRight: 10}}>
          <AntDesign style={{textAlign: 'right'}} name="plus" size={26} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <View style={styles.filter}>
        <TouchableOpacity onPress={() => handleFilter('All')} style={{paddingVertical: 7, paddingHorizontal: 15, borderRadius: 20, backgroundColor: activeFilter === 'All' ? Colors.PRIMARY : '#fff'}}>
          <Text style={{color: activeFilter === 'All' ? '#fff' : 'black', fontWeight: '600'}}>All</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.filter}>
        <TouchableOpacity onPress={() => handleFilter('In-Stock')} style={{paddingVertical: 7, paddingHorizontal: 15, borderRadius: 20, backgroundColor: activeFilter === 'In-Stock' ? Colors.PRIMARY : '#fff'}}>
          <Text style={{color: activeFilter === 'In-Stock' ? '#fff' : 'black', fontWeight: '600'}}>In-Stock</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.filter}>
        <TouchableOpacity onPress={() => handleFilter('Out-Stock')} style={{paddingVertical: 7, paddingHorizontal: 15, borderRadius: 20, backgroundColor: activeFilter === 'Out-Stock' ? Colors.PRIMARY : '#fff'}}>
          <Text style={{color: activeFilter === 'Out-Stock' ? '#fff' : 'black', fontWeight: '600'}}>Out-Stock</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.itemListContainer}>

        {filteredItems.length > 0 ? (
          <FlatList 
            data={filteredItems}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.itemListItem} onPress={() => handlePress(item.id)}>
                <View style={styles.imgContainer}>
                  <Image style={styles.image} source={{uri: `${BASE_URL}/${item.cover_image}`}} />
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.title}>
                  <Text style={styles.titleName}>{item.name}</Text>
                  <Text style={styles.titleItems}>LKR {item.price.toFixed(2)}</Text>
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
            <Text style={{textAlign: 'center', fontSize: 26, fontWeight: '700', color: '#878787'}}>No Items to Display</Text>
          </View>
        )} 
      </View>

    </View>
  )
}

export default ShopDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
    height: 100,
    position: 'relative',
  },
  backBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    marginHorizontal: 'auto',
    textAlign: 'center'
  },
  countContainer: {
    marginTop: 20,
    backgroundColor: "#FAFAFA",
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginVertical: 15
  },
  filterContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10
  },
  filter: {
    marginLeft: 20
  },  
  itemListContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    paddingHorizontal: 5
  },
  itemListItem: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  imgContainer: {
    height: '100%',
    width: '25%',
    borderRadius: 10
  },
  image: {
    maxWidth: '100%',
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

// To keep track of how many items are sold in a system where:

// A User has Shops.
// Each Shop has many Items.
// Each Item can have multiple Sales.
// Here’s a structured way to model this relationship and handle the count of items sold:

// Database Design
// Entities
// User

// id: Primary Key
// name, email, etc.
// Shop

// id: Primary Key
// name, address, etc.
// user_id: Foreign Key to User
// Item

// id: Primary Key
// name, price, stock, etc.
// shop_id: Foreign Key to Shop
// Sale

// id: Primary Key
// item_id: Foreign Key to Item
// quantity: Number of items sold
// sale_date: Timestamp of the sale
// Tracking Items Sold
// You can track the total items sold by using the Sale entity, which logs each transaction. The count of items sold can then be calculated by summing the quantity field for the specific item.

// Query Examples
// 1. Total Items Sold for a Specific Item
// SELECT SUM(quantity) AS total_sold
// FROM Sale
// WHERE item_id = :itemId;
// 2. Total Items Sold for a Shop
// SELECT i.id AS item_id, i.name AS item_name, SUM(s.quantity) AS total_sold
// FROM Item i
// LEFT JOIN Sale s ON i.id = s.item_id
// WHERE i.shop_id = :shopId
// GROUP BY i.id, i.name;
// 3. Total Items Sold for All Shops of a User
// SELECT sh.id AS shop_id, sh.name AS shop_name, SUM(s.quantity) AS total_sold
// FROM Shop sh
// LEFT JOIN Item i ON sh.id = i.shop_id
// LEFT JOIN Sale s ON i.id = s.item_id
// WHERE sh.user_id = :userId
// GROUP BY sh.id, sh.name;
// Backend Implementation
// Sale Recording Endpoint
// In Spring Boot, you can create an endpoint to record a sale:

// @PostMapping("/sales")
// public ResponseEntity<?> recordSale(
//         @RequestParam Long itemId,
//         @RequestParam int quantity) {

//     Optional<Item> item = itemRepository.findById(itemId);
//     if (item.isEmpty()) {
//         return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item not found");
//     }

//     // Save the sale
//     Sale sale = new Sale();
//     sale.setItem(item.get());
//     sale.setQuantity(quantity);
//     sale.setSaleDate(LocalDateTime.now());
//     saleRepository.save(sale);

//     return ResponseEntity.ok("Sale recorded successfully");
// }
// Updating Item Stock
// Whenever a sale is recorded, you can decrement the item's stock:

// if (item.getStock() < quantity) {
//     return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Not enough stock");
// }
// item.setStock(item.getStock() - quantity);
// itemRepository.save(item);
// Aggregating Sold Count
// For frequent queries, consider caching the total items sold using a derived field or materialized views.

// Example: items_sold Field
// Add an items_sold field to the Item entity:

// Update this field when recording a sale.
// Use it for quick read operations.
// Example Use Case
// User Workflow
// Admin Dashboard:
// Display total items sold per shop and item.
// Shop Dashboard:
// Show real-time item availability and total sales.
// By tracking sales at the Sale entity level and aggregating when necessary, you ensure data consistency and flexibility for reporting.

// Filter function
// const [items, setItems] = useState([]);
// const [filteredItems, setFilteredItems] = useState([]);

// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch('https://api.example.com/items');
//     const data = await response.json();
//     setItems(data);
//     setFilteredItems(data);
//   };
//   fetchData();
// }, []);

// const handleFilter = (query) => {
//   const filtered = items.filter(item =>
//     item.name.toLowerCase().includes(query.toLowerCase())
//   );
//   setFilteredItems(filtered);
// };