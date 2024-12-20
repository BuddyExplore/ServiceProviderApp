import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

    const router = useRouter();

  return (
    <View>
      {/* <Image source={require("./../assets/images/login.jpg")}
        style = {{
            width:'100%',
            height:500
        }}
      /> */}
      <View style={styles.container}>
        <Text style={{
            fontSize:25,
            fontFamily:'poppins-medium',
            textAlign:'center',

        }}>Dashboards</Text>

        <Text style={{
            fontFamily:'outfit',
            fontSize:17,
            textAlign:'center',
            color:Colors.GRAY,
            marginTop:20
        }}>Switch Dashboards</Text>

        
        <TouchableOpacity style={styles.button}
            onPress={() => router.push('(TourGuide)/dashboard')}
        >
            <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit',
                fontSize:17,
            }}>Goto TourGuides dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
            onPress={() => router.push('ShopManager')}
        >
            <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                
                fontFamily:'outfit',
                fontSize:17,
            }}>Go to Shop Manager's dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
            onPress={() => router.push('(VehicleOwner)/Dashboard')}
        >
            <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                
                fontFamily:'outfit',
                fontSize:17,
            }}>Go to Vehicle Owner's dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
            onPress={() => router.push('(HotelManager)/home/Dashboard')}
        >
            <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit',
                fontSize:17,
            }}>Goto Hotel Manager's dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
            onPress={() => router.push('ShopManager')}
        >
            <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit',
                fontSize:17,
            }}>Goto Siraj Shop's dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.WHITE,
    marginTop:-20,
    height:'100%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:25,
  },
  button:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop:'10%'
  }
})