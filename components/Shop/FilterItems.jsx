import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'

const FilterItems = ({backPressed}) => {
    const router = useRouter();

    const handleBackPressed = () => {
        backPressed(1);
    }
  return (
    <View >
        <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                alignItems:'center',
                borderRadius: 30,
                width: 150,
                height: 50,
                marginTop:12,
                marginBottom: 10,
                marginLeft: 10,
                padding: 10
            }}>
            
        <TouchableOpacity style={styles.touchable} onPress={handleBackPressed}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                alignItems:'center',
                justifyContent: 'center',
                backgroundColor: '#E8E8E8',
                borderRadius: 20,
                width: 50,
                height: 50,
                marginTop:12,
                marginBottom: 10,
                marginLeft: 10,
                padding: 10
            }}>
                <Ionicons name="arrow-back-outline" size={24} color={'black'} />
            </View>
        </TouchableOpacity>
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
                <Text>Filter Items</Text>
            </View>
        </TouchableOpacity>
        {/* router.push('../ShopAddItems/Screen1') */}
        <TouchableOpacity style={styles.touchable} onPress={() => router.push('./AddItems')}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                
                alignItems:'center',
                backgroundColor: '#4897D9',
                borderRadius: 20,
                width: 120,
                height: 50,
                marginTop:12,
                marginBottom: 10,
                marginLeft: 10,
                padding: 10
            }}>
                <Ionicons name="add-outline" size={24} color={'white'} />
                <Text style={{
                    color: 'white',
                }}>Add Item</Text>
            </View>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default FilterItems

const styles = StyleSheet.create({})