import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from '../../../constants/Colors'
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';

const OrderDetails = () => {
  const router = useRouter();
  const itemInfo = {id: 2, name: 'Batik Shirt', img: require('../../../assets/images/Shop/batikshirt.jpg'), price: 4500.00, city: 'Gampaha'  };
  const shop = {id: 1, name: 'Laksala', img: require('../../../assets/images/Shop/shop.jpg')}
  const user = {id: 1, img: require('../../../assets/images/TourGuide/wasri.jpg')}

  return (
    <View style={styles.container}>

      {/* Item */}
      <View style={styles.viewPart}>

      <View style={styles.subHeader2}>
      <Ionicons name="bag-handle-outline" size={24} color={"black"} />
        <Text style={{fontSize: 16, fontWeight: '500'}}>Item</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 36, marginTop: 8}}>
      <View style={{height: 75 , width: 100, borderRadius: 10}}>
        <Image source={itemInfo.img} style={{maxWidth: '100%', maxHeight: '100%', borderRadius: 10}}/>
      </View>

      <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{marginLeft: 22, gap: 5 }}>
          <Text style={{fontSize: 15, fontWeight: '500'}}>{itemInfo.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 12, color: '#878787'}}>{`LKR ${itemInfo.price}.00`}</Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: Colors.PRIMARY, paddingHorizontal: 10, paddingVertical: 5, marginRight: 10}}>
          <Text style={{fontSize: 12, color: Colors.PRIMARY}}>Details</Text>
        </TouchableOpacity>
      </View>
      </View>

      </View>

      {/* Shop */}
      <View style={styles.viewPart}>

      <View style={styles.subHeader2}>
      <Ionicons name="bag-handle-outline" size={24} color={"black"} />
        <Text style={{fontSize: 16, fontWeight: '500'}}>Shop</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 36, marginTop: 8}}>
      <View style={{height: 75 , width: 100, borderRadius: 10}}>
        <Image source={shop.img} style={{maxWidth: '100%', maxHeight: '100%', borderRadius: 10}}/>
      </View>

      <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{marginLeft: 22, gap: 5 }}>
          <Text style={{fontSize: 15, fontWeight: '500'}}>{shop.name}</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: Colors.PRIMARY, paddingHorizontal: 10, paddingVertical: 5, marginRight: 10}}>
          <Text style={{fontSize: 12, color: Colors.PRIMARY}}>Details</Text>
        </TouchableOpacity>
      </View>
      </View>

      </View>

      {/* User */}
      <View style={styles.viewPart}>

      <View style={styles.subHeader2}>
        <Feather name="user" size={24} color="black" />
        <Text style={{fontSize: 16, fontWeight: '500'}}>Reserved by</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 36, marginTop: 8}}>
      <View style={{height: 60 , width: 60, borderRadius: '50%', overflow: 'hidden', backgroundColor: '#878787', justifyContent: 'center', alignItems: 'center'}}>
        {user.img && <Image source={user.img} style={{maxWidth: '100%', maxHeight: '100%', borderRadius: 10}}/>}
        {!user.img && <Feather name="user" size={24} color="black" />}
      </View>

      <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{marginLeft: 22, gap: 5 }}>
          <Text style={{fontSize: 15, fontWeight: '500'}}>{shop.name}</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: Colors.PRIMARY, paddingHorizontal: 10, paddingVertical: 5, marginRight: 10}}>
          <Text style={{fontSize: 12, color: Colors.PRIMARY}}>Details</Text>
        </TouchableOpacity>
      </View>
      </View>

      </View>

      {/* Shop */}
      <View style={styles.viewPart}>

      <View style={styles.subHeader2}>
        <Ionicons name="newspaper-outline" size={24} color="black" />
        <Text style={{fontSize: 16, fontWeight: '500'}}>Details</Text>
      </View>
    
      <View style={{marginHorizontal: 20, gap: 5, marginTop: 10 }}>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#969696'}}>Date of reservation :</Text>
        <Text>Aug 09, 2024</Text>
        </View>

        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#969696'}}>Status</Text>
        <Text>Reserved</Text>
        </View>
      </View>

      </View>

      <View style={styles.btnContainer}>
      <TouchableOpacity onPress={() => router.back()} style={styles.cancelBtn}>
        <Text style={styles.cancelBtnText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextBtn} onPress={null}>
        <Text style={styles.nextBtnText}>Delete</Text>
      </TouchableOpacity>
      </View>


    </View>
  )
}

export const unstable_settings = {
  tabBarStyle: { display: 'none' },
};

export default OrderDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  subHeader2: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10, 
    padding: 10
  },
  viewPart: {
    marginTop: 7,
    paddingBottom: 22,
    borderBottomColor: '#D4D4D4',
    borderBottomWidth: 1,
    width: '100%'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    gap: 30,
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#fff',
    zIndex: 1
  },
  cancelBtn: {
    backgroundColor: '#fff',
    borderRadius: 32,
    width: '45%'
  },
  cancelBtnText: {
    color: Colors.PRIMARY,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600'
  },
  nextBtn: {
    backgroundColor: Colors.DANGER,
    borderRadius: 32,
    padding: 10,
    width: '40%'
  },
  nextBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600'
  }
})