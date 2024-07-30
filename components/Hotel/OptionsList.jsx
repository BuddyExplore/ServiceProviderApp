import { View, Text, FlatList , Image, StyleSheet , ScrollView} from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Option from './Option';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function OptionsList() {

    const preferencesList = [
        { name: 'Total Rooms', icon: <FontAwesome name="hotel" size={32} color="blue" />, subText: "Total available", count: 12, path: "../rooms/Rooms" },
        { name: 'Checked In', icon: <FontAwesome6 name="check-circle" size={32} color="green" />, subText: "Peak check-in time: 3 - 5 PM", count: 5, path: "../rooms/RoomsScreen" },
        { name: 'Total Bookings', icon: <Ionicons name="people" size={32} color="#C70039" />, subText: "In the past 7 days", count: 18, path: "../bookings/Bookings" },
        { name: 'Reviews', icon: <MaterialIcons name="reviews" size={32} color="#FFC107" />, subText: "Customer reviews", count: 34, path: "../reviews/Reviews" },
      ];

  return (
    <View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
        
        <View style={{
            padding:20,
            paddingBottom:0,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:1,
            alignItems:'center'
        }}>
            {/* <Text style={{
                fontSize:15,
                fontFamily:'outfit-bold'
            }}>Current items</Text> */}
            
            {/* <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-medium'
            }}>View all</Text> */}
        </View>
        {preferencesList.map((item, index) => (
                <Option prefernce={item} key={index}/>
            ))}
        {/* <FlatList 
            showsHorizontalScrollIndicator={false}
            data={preferencesList}
            horizontal={false}
            renderItem={({item, index}) => (
                
            )}
        /> */}
        </ScrollView>

    </View>

    
  )
}

const styles = StyleSheet.create({

    scrollContainer: {
      paddingBottom: 500, // To prevent content from being hidden behind FAB
      
    },
  
  });