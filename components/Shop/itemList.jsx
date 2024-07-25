import { View, Text, FlatList , Image, StyleSheet , ScrollView} from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import GuidesListItem from './item';



export default function itemList() {
    const preferencesList = [
        { name: 'Batik Shirt', price: 'Rs 500', where:'Nugegoda' , icon: '🔔', img:require('./../../assets/images/Shop/batikshirt.jpg')  },
        { name: 'Batik Sarong',price: 'Rs 400', where:'Hokanda' , icon: '👤', img:require('./../../assets/images/Shop/batiksarong.jpg')  },
        { name: 'Batik Trouser',price: 'Rs 1200', where:'Moratuwa' , icon: '🔔', img:require('./../../assets/images/Shop/batikshort.png')  },
        { name: 'Walpaper', price: 'Rs 700',where:'Pannipitiya' , icon: '⚙️', img:require('./../../assets/images/Shop/walpaper.jpg')  },
        { name: 'Rug', price: 'Rs 550',where:'Nugegoda' , icon: '🔔', img:require('./../../assets/images/Shop/walpaper.jpg')  },
        { name: 'Keytag', price: 'Rs 500',where:'Hokanda', icon: '👤', img:require('./../../assets/images/Shop/keytag.jpg')  },
        { name: 'Rug', price: 'Rs 300',where:'Moratuwa', icon: '🔔', img:require('./../../assets/images/Shop/shop.png')  },
        { name: 'Walpaper', price: 'Rs 200',where:'Pannipitiya', icon: '⚙️', img:require('./../../assets/images/Shop/shop.png')  },
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
            }}>Current items</Text>
            
            {/* <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-medium'
            }}>View all</Text> */}
        </View>
        {preferencesList.map((item, index) => (
                <GuidesListItem prefernce={item} key={index}/>
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