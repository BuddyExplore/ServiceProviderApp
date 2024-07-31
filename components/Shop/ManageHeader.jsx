import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function Header({headerItems}) {
  return (
    <View style={{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
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
                }}>{headerItems.Name},</Text>
                <Text style={{
                    color:'#fff',
                    fontSize:23,
                    fontFamily:'outfit-medium'
                }}>{headerItems.Text}</Text>
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
            <TextInput placeholder={headerItems.Placeholder}
                style={{
                    fontFamily:'outfit',
                    fontSize:16
                }}
            />
        </View>

    </View>
  )
}