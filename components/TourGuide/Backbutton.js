import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const BackButton = ({ handlePress}) => {
  return (
    <TouchableOpacity 
    onPress = {handlePress}
    activeOpacity ={0.7}
    style={{ position: 'absolute', top: 48, left: 20 }}>

        <Image
          source={require("../../assets/images/TourGuide/left-arrow.png")}
          //resizeMode='contain'
          style={{ width: 36, height: 36 }}
        />              
    </TouchableOpacity>
  )
}

export default BackButton