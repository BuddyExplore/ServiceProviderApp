import { View, Text, TextInput, Button, StyleSheet , Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors';

const AddItemCancel = () => {

    const router = useRouter();
    
  return (
    <View style={{
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    }}>
      <TouchableOpacity style={styles.button1} onPress={() => router.push('../(ShopManager)/manage')}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={() => router.push('../(ShopManager)/manage')}>
        <Text style={styles.buttonText1}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddItemCancel


const styles = StyleSheet.create({

      button1: {
        backgroundColor: Colors.PRIMARY, // Background color
        width: '45%',
        paddingVertical: 10, // Vertical padding
        paddingHorizontal: 20, // Horizontal padding
        borderRadius: 5, // Rounded corners
        alignItems: 'center',
        marginBottom: 20
      },
      button2: {
        backgroundColor: '#E8E8E8', // Background color
        width: '45%',
        paddingVertical: 10, // Vertical padding
        paddingHorizontal: 20, // Horizontal padding
        borderRadius: 5, // Rounded corners
        alignItems: 'center',
        marginBottom: 20
      },
      buttonText: {
        color: '#FFFFFF', // Text color
        fontSize: 16, // Text size
        fontWeight: 'bold', // Text weight
      },
      buttonText1: {
        color: 'black', // Text color
        fontSize: 16, // Text size
        fontWeight: 'bold', // Text weight
      },
  });