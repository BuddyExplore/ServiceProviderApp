import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'


export default function Header(props) {
  return (
    <View style={{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY+"AA",
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
                }}>Shaf,</Text>
                <Text style={{
                    color:'#fff',
                    fontSize:23,
                    
                }}>{props.content}</Text>
            </View>
        </View>

        {/* search bar */}
    </View>
  )
}