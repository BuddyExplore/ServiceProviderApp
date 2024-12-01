import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'


export default function Header(props) {
  return (
    <View style={{
        padding:20,
        paddingTop:30,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }}>
        
                <Text style={{
                    color:'#000',
                    fontSize:23,
                    margin: 'auto'
                    
                }}>{props.content}</Text>
           
        

        {/* search bar */}
    </View>
  )
}