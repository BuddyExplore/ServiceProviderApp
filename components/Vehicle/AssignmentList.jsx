import { View, Text, FlatList , Image, StyleSheet , ScrollView} from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import GuidesListItem from './item';



export default function AssignmentList() {
    const preferencesList = [
        { name: 'John', price: 'Rs 2000', where:'Nugegoda' , icon: '🔔', img:require('./../../assets/images/Vehicle/ella.jpeg')  },
        { name: 'Karan',price: 'Rs 2400', where:'Hokanda' , icon: '👤', img:require('./../../assets/images/Vehicle/Dunhinda_Falls.jpg')  },
        { name: 'Doe',price: 'Rs 1200', where:'Moratuwa' , icon: '🔔', img:require('./../../assets/images/Vehicle/ella.jpeg')  },
        { name: 'Adams', price: 'Rs 700',where:'Pannipitiya' , icon: '⚙️', img:require('./../../assets/images/Vehicle/Dunhinda_Falls.jpg')  },
        { name: 'Peter', price: 'Rs 550',where:'Nugegoda' , icon: '🔔', img:require('./../../assets/images/Vehicle/ella.jpeg')  },
        { name: 'Smith', price: 'Rs 500',where:'Hokanda', icon: '👤', img:require('./../../assets/images/Vehicle/ella.jpeg')  },
        { name: 'David', price: 'Rs 300',where:'Moratuwa', icon: '🔔', img:require('./../../assets/images/Vehicle/Dunhinda_Falls.jpg')  },
        { name: 'Walpaper', price: 'Rs 200',where:'Pannipitiya', icon: '⚙️', img:require('./../../assets/images/Vehicle/Dunhinda_Falls.jpg')  },
        // { name: 'Kayaking', icon: '🔔', img:require('../../assets/images/Home/Prefernces/kayak.png') },
      ];

  return (
    <View>
        <Text style={{
             paddingHorizontal:20,
                fontSize:20,
                fontFamily:'outfit-bold'
            }}>Assignments</Text>
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
            
            
        
        </View>
        {preferencesList.map((item, index) => (
                <GuidesListItem prefernce={item} key={index}/>
            ))}
       
        </ScrollView>

    </View>

    
  )
}

const styles = StyleSheet.create({

    scrollContainer: {
      paddingBottom: 500, // To prevent content from being hidden behind FAB
      
    },
  
  });