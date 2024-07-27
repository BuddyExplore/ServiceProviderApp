import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image , Modal , Pressable } from 'react-native';
import React , {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';


export default function ItemDetails({ prefernce, openEdit }) {

    const handleEdit = (itemName) => {
        openEdit(1);
      };

      
    return(
        <View>
            <View style={{
                backgroundColor: '#F0EDED',
                width: '100%',
                alignItems: 'center',
                marginTop:20,
                marginBottom: 20, 
                borderRadius: 12
            }}>
            <Image source={prefernce.img} style={styles.itemImg}/>
            </View>
            
            <View style={{
                display: 'flex',
                justifyContent : 'space-between',
                flexDirection: 'row'
            }}>
                <Text style={styles.itemData}>{prefernce.name}</Text>
                <Text style={styles.itemData}>LKR {prefernce.price}.00</Text>
            </View>
            
            <Text style={styles.itemAvailability}>In-Stock</Text>

            <Text style={styles.label}>Experience unparalleled comfort and style with our premium shirt, crafted from high-quality fabrics for a perfect fit, breathability, and durability. Elevate your wardrobe with timeless elegance.</Text>

            



            <TouchableOpacity
            style={[styles.editButton, styles.buttonClose]}
            onPress = {handleEdit}
            // onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={styles.buttonTxt}>Edit Item</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    
  itemName: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  itemImg: {
    width: 200,
    height: 200,
    
  },
  label: {
    fontSize: 16,
    // fontWeight: 'bold',
    marginBottom: 20,
    color: 'grey'
  },
  itemData: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  itemAvailability: {
    color : Colors.SECOND,
    marginBottom: 20,
  },
  backButton: {
    width: 50,
    backgroundColor: '#F0EDED',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  editButton: {
    backgroundColor: Colors.PRIMARY,
    height: 40,
    width: 130,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  buttonTxt : {
    fontSize: 21,
    color: 'white',
    fontWeight: 'bold'
  }
});