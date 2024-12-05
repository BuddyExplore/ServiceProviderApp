import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useRouter } from 'expo-router'
import {AuthContext} from '../../../context/AuthContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../../constants/Colors';
import Feather from '@expo/vector-icons/Feather';

const Profile = () => {
  const router = useRouter();
  const {user} = useContext(AuthContext);
  console.log(user);
  const wasri = {id: 1, img: require('../../../assets/images/TourGuide/wasri.jpg')}

  return (
    <View style={styles.container}>

      <View style={{flexDirection: 'row', justifyContent: 'center', paddingVertical: 50}}>
      <View style={{height: 70 , width: 70, borderRadius: '50%', overflow: 'hidden', backgroundColor: '#878787', justifyContent: 'center', alignItems: 'center'}}>
        {wasri.img && <Image source={wasri.img} style={{maxWidth: '100%', maxHeight: '100%', borderRadius: 10}}/>}
        {!wasri.img && <Feather name="user" size={24} color="black" />}
      </View>
      </View>
      
      {/* Shop */}
      <View style={styles.viewPart}>

      <View style={styles.subHeader2}>
        <Feather name="user" size={24} color="black" />
        <Text style={{fontSize: 16, fontWeight: '500'}}>My Details</Text>
      </View>
    
      <View style={{marginHorizontal: 20, gap: 5, marginTop: 10 }}>
        <View style={{width: '100%', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#969696'}}>Email:</Text>
        <Text>{user.email}</Text>
        </View>

        <View style={{width: '100%', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#969696'}}>First Name:</Text>
        <Text>{user.first_name}</Text>
        </View>

        <View style={{width: '100%', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#969696'}}>Last Name:</Text>
        <Text>{user.last_name}</Text>
        </View>
        <View style={{width: '100%', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#969696'}}>Mobile No:</Text>
        <Text>{user.mobile_no}</Text>
        </View>
        <View style={{width: '100%', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#969696'}}>Role:</Text>
        <Text>{user.role}</Text>
        </View>
      </View>

      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.nextBtn} onPress={() => router.replace('/')}>
          <Text style={styles.nextBtnText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile

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
    padding: 10,
    marginBottom: 10
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
    backgroundColor: '#1e211f',
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