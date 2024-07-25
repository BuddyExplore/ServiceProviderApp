import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.SECOND,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }}>
        <View style={{
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20
        }}>
            <Image source={require("./../../assets/images/Shop/shop.png")}
                style={{
                    width:45,
                    height:45,
                    borderRadius:99
                }}
            />
            <View>
                <Text style={{
                    color:'#fff'
                }}>Royal Batiks,</Text>
                <Text style={{
                    color:'#fff',
                    fontSize:23,
                    fontFamily:'outfit-medium'
                }}>Your current orders</Text>
            </View>
        </View>

        {/* search bar */}


    </View>
  )
}