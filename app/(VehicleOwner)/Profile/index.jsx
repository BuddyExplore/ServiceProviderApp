import { Button,Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from 'expo-router';

export default function Index() {
    const navigation = useNavigation();
    return (
      <View>
        <Button title="Save" onPress={()=>navigation.navigate("ProfileDetails")}/>
        <Button title="Save" onPress={()=>navigation.navigate("Payment")}/>
      </View>
    )
}

const styles = StyleSheet.create({})