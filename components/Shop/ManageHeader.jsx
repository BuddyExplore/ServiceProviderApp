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
                }}>Manage your shop</Text>
            </View>
        </View>

        {/* search bar */}
        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:10,
            alignItems:'center',
            backgroundColor:'#fff',
            padding:8,
            marginVertical:2,
            marginTop:12,
            borderRadius:8
        }}>
            <Ionicons name="search" size={24} color={Colors.SECOND} />
            <TextInput placeholder='Search for items in your shop...'  
                style={{
                    fontFamily:'outfit',
                    fontSize:16
                }}
            />
        </View>

    </View>
  )
}