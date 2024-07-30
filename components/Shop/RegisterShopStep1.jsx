import { ScrollView, StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

const RegisterShopStep1 = () => {
  return (
    <View style={{padding: 20}}>
        <ScrollView>

            
            <View>
              <Text style={styles.label}>
                Shop Name
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Shop Name"
            />
            </View>
            
            <View>
              <Text style={styles.label}>
                Shop Description
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Shop Description"
             />
            </View>

            <View>
              <Text style={styles.label}>
                Category
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Category"
            />
            </View>

            <View>
              <Text style={styles.label}>
                Owner's name
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Owner's name"
            />
            </View>

            <View>
              <Text style={styles.label}>
                Contact Number
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Contact Number"
            />
            </View>

            <View>
              <Text style={styles.label}>
                Address
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Address"
            />
            </View>

            <View>
              <Text style={styles.label}>
                Postal Code
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Postal Code"
            />
            </View>

            <TouchableOpacity style={styles.regisBtn}>
                <Text>Register</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default RegisterShopStep1

const styles = StyleSheet.create({
    
  label : {
    fontSize: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  regisBtn : {
    alignSelf : 'center',
    backgroundColor: '#E8E8E8',
    height: 40,
    width: 100,
    borderRadius: 10,
    display : 'flex',
    justifyContent: 'center',
    alignItems : 'center'
  }
})