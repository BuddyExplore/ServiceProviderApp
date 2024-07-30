import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Amenities = () => {
  const services = [
    {
      id: "0",
      name: "room service"
    },
    {
      id: "2",
      name: "free wifi"
    },
    {
      id: "3",
      name: "Family rooms"
    },
    {
      id: "4",
      name: "Free Parking"
    },
    {
      id: "5",
      name: "swimming pool"
    },
    {
      id: "6",
      name: "Restaurant"
    },
    {
      id: "7",
      name: "Fitness center"
    },
  ]

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 17, fontWeight: "600"}}>Most Popular Facilities</Text>
      <View style={{flexDirection: "row", alignItems: "center", flexWrap: "wrap"}}>
        {services.map((item, index) => (
          // margin should be : 10
          <View style={{marginVertical: 6, marginHorizontal: 3, backgroundColor: "#007FFF", paddingVertical: 5, paddingHorizontal: 11,
            borderRadius: 25
          }} key={index}>
            <Text style={{textAlign: "center", color: "white"}}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Amenities

const styles = StyleSheet.create({})