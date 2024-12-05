import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import Login from "../app/(auth)/Login";
import { SafeAreaView } from "react-native-safe-area-context";
import React, {useState, useEffect} from "react";
import * as Font from 'expo-font';

export default function Index() {

  const [fontLoaded, setFontLoaded] = React.useState(false)

  React.useEffect(() => {
    Font.loadAsync({
      'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
      'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'), 
      'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
      'poppins-bold': require('./../assets/fonts/Poppins-Bold.ttf'),
      'poppins-semibold': require('./../assets/fonts/Poppins-SemiBold.ttf'),
      'poppins-light': require('./../assets/fonts/Poppins-Light.ttf'),
      'poppins-medium': require('./../assets/fonts/Poppins-Medium.ttf'),
      'poppins-regular': require('./../assets/fonts/Poppins-Regular.ttf'),
    })
    .then(() => {
     setFontLoaded(true)
    }) 
  }, [])

  const customTextProps = { 
    style: { 
      fontFamily: 'poppins-medium'
    }
  }

  // setCustomText(customTextProps);



  return <Redirect href={'/Login'} />
  // return(
  //   <div>
  //     <Login />
  //   </div>
  // )
   
}
