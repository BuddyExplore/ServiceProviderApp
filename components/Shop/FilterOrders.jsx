import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const FilterItems = () => {
  return (
    <View >
        <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                alignItems:'center',
                backgroundColor: 'white',
                borderRadius: 20,
                width: 150,
                height: 50,
                marginTop:12,
                marginBottom: 10,
                marginLeft: 10,
                padding: 10
            }}>
        <TouchableOpacity style={styles.touchable}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                alignItems:'center',
                backgroundColor: 'white',
                borderRadius: 20,
                width: 150,
                height: 50,
                marginTop:12,
                marginBottom: 10,
                marginLeft: 10,
                padding: 10
            }}>
                <Ionicons name="options-outline" size={24} color={'black'} />
                <Text>Filter Orders</Text>
            </View>
        </TouchableOpacity>

        
        </View>
    </View>
  )
}

export default FilterItems

const styles = StyleSheet.create({})