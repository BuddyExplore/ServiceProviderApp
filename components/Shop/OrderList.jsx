import { View, Text, FlatList , Image, StyleSheet , ScrollView} from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import OrderItem from './OrderItem';



export default function itemList() {
    const preferencesList = [
        { name: 'Batik Shirt', buyer: 'Alexander', time: '5 mins ago', where:'Nugegoda' , icon: '🔔', img:require('./../../assets/images/Shop/batikshirt.jpg')  },
        { name: 'Batik Sarong',buyer: 'David', time: '1 day ago', where:'Hokanda' , icon: '👤', img:require('./../../assets/images/Shop/batiksarong.jpg')  },
        { name: 'Batik Trouser',buyer: 'John', time: '3 days ago', where:'Moratuwa' , icon: '🔔', img:require('./../../assets/images/Shop/batikshort.png')  },
        // { name: 'Walpaper', buyer: 'Kenwood', time: '5 mins ago',where:'Pannipitiya' , icon: '⚙️', img:require('./../../assets/images/Shop/walpaper.jpg')  },
        // { name: 'Rug', buyer: 'Peterson', time: '5 mins ago',where:'Nugegoda' , icon: '🔔', img:require('./../../assets/images/Shop/walpaper.jpg')  },
        // { name: 'Keytag', buyer: 'Peiris', time: '5 mins ago',where:'Hokanda', icon: '👤', img:require('./../../assets/images/Shop/keytag.jpg')  },
        // { name: 'Rug', buyer: 'Tommy', time: '5 mins ago',where:'Moratuwa', icon: '🔔', img:require('./../../assets/images/Shop/shop.png')  },
        // { name: 'Walpaper',buyer: 'Anne', time: '5 mins ago',where:'Pannipitiya', icon: '⚙️', img:require('./../../assets/images/Shop/shop.png')  },
        // { name: 'Kayaking', icon: '🔔', img:require('../../assets/images/Home/Prefernces/kayak.png') },
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
            <Text style={{
                fontSize:15,
                fontFamily:'outfit-bold'
            }}>Current Orders</Text>
            
            {/* <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-medium'
            }}>View all</Text> */}
        </View>
        {preferencesList.map((item, index) => (
                <OrderItem prefernce={item} key={index}/>
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