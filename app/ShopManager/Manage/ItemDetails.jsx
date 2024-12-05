import { StyleSheet, Pressable, Text, View, Image, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../../constants/Colors';
import { useLocalSearchParams, useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import BASE_URL from '../../../constants/globals';

const ItemDetails = () => {
  const router = useRouter();

  const {shopID, itemID} = useLocalSearchParams();

  const [item, setItem] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/travel/item/itemOnly/${itemID}`)
        const itemData = response.data;
        setItem(itemData);
      } catch(err) {
        console.error(`Error fetching item `, err.message);
      }
    }

    fetchItem();
  }, [shopID, itemID])

  const handleEdit = () => {
    router.push({
      pathname: "./EditItem",
      params: {
        itemID,
        shopID
      }
    })
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/travel/item/remove/${item.id}`);
      setDeleted(true);
    } catch(err) {
      console.log('Error deleting item, ' + err);
    } 
  }

  const handleOK = () => {
    router.replace(
      `./ShopDetails?shopID=${shopID}`,
      undefined,
      { shallow: true }
    )
  }

  const handleBackBtnPress = () => {
    router.replace(
      `./ShopDetails?shopID=${shopID}`,
      undefined,
      { shallow: true }
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        <Pressable style={styles.backBtn} onPress={handleBackBtnPress}>
          <Ionicons name="arrow-back-outline" size={26} color="black" />
        </Pressable>
        <Text style={styles.headerText}>Item Details</Text>
      </View>
    
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{alignItems: 'center'}}>
      <View style={styles.imageContainer}>
      <Image source={{uri: `${BASE_URL}/${item.cover_image}`}} style={styles.image} />
      </View>
    </View>
    
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>Item Name</Text>
      <Text style={styles.fieldValue}>{item.name}</Text>
    </View>
    
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>Item Price</Text>
      <Text style={styles.fieldValue}>{`LKR ${item?.price?.toFixed(2)}`}</Text>
    </View>
    
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>Availability</Text>
      <Text style={styles.fieldValue}>{item.is_available ? 'In Stock' : 'Out of Stock'}</Text>
    </View>
    
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>Category</Text>
      <Text style={styles.fieldValue}>{item.item_category}</Text>
    </View>

    <View style={styles.field}>
      <Text style={styles.fieldLabel}>Item Count</Text>
      <Text style={styles.fieldValue}>{item.item_count}</Text>
    </View>
    
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>Item Description</Text>
      <Text style={{fontSize: 15, fontWeight: '400'}}>{item.description}</Text>
    </View>
    </ScrollView>
    
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.cancelBtn}>
        <Text style={styles.cancelBtnText}>Remove</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextBtn} onPress={handleEdit}>
        <Text style={styles.nextBtnText}>Edit</Text>
      </TouchableOpacity>
    </View>

    <Modal
      transparent={true}
      visible={isModalVisible}
    >
    <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>

      { deleted &&
        <>
        <View style={{marginVertical: 10}}>
          <AntDesign name="checkcircle" size={50} color={Colors.PRIMARY} />
        </View>

        <View style={{marginVertical: 10}}>
          <Text style={{textAlign: 'center', fontSize: 17, fontWeight: '500'}}>Item has been deleted successfully !</Text>
        </View>

        <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 25, backgroundColor: Colors.PRIMARY, borderRadius: 20, marginTop: 20}} onPress={handleOK}>
          <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>Ok</Text>
        </TouchableOpacity>
        </>
      } 

      { !deleted &&
        <>
        <View style={{marginVertical: 10}}>
        <AntDesign name="exclamationcircle" size={50} color={Colors.PRIMARY} />
        </View>

        <View style={{marginVertical: 10}}>
          <Text style={{textAlign: 'center', fontSize: 17, fontWeight: '500'}}>Are you sure want to delete the item ?</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, gap: 25}}>
        <TouchableOpacity style={{paddingVertical: 12, paddingHorizontal: 20, borderRadius: 19}}
          onPress={() => setIsModalVisible(false)}
        >
          <Text style={{fontSize: 15, fontWeight: '500', color: Colors.PRIMARY}}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{padding: 10, backgroundColor: Colors.PRIMARY, borderRadius: 20, paddingHorizontal: 15}} onPress={handleDelete}>
          <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>Confirm</Text>
          </TouchableOpacity>
        </View>
        </>
      } 
      </View>
    </View>
    </Modal>
    

    </View>
  )
}

export default ItemDetails

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
  imageContainer: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 10,
  },
  imageUpload: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  removeImage: {
    backgroundColor: 'red',
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 7,
  },
  field: {
    paddingHorizontal: 12,
    marginTop: 10,
    marginTop: 20
  },
  input: {
    width: '100%',
    padding: 10,
    paddingLeft: 15,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#F6F6F6'
  },
  fieldLabel:{
    fontSize: 15
  },
  fieldValue: {
    fontSize: 17,
    fontWeight: '600'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    gap: 30,
    // backgroundColor: 'green',
  },
  cancelBtn: {
    backgroundColor: Colors.DANGER,
    borderRadius: 32,
    width: '40%'
  },
  cancelBtnText: {
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600'
  },
  nextBtn: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 32,
    padding: 10,
    width: '40%'
  },
  nextBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600'
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    width: 315,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
})
