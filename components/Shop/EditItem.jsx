import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image , Modal , Pressable , TextInput , ScrollView} from 'react-native';
import React , {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Picker } from '@react-native-picker/picker';


export default function EditItem({ prefernce , savedPressed}) {
 
  const [itemName, setItemName] = useState(prefernce.name);
    const [itemDescription, setItemDescription] = useState('Description');
    const [itemPrice, setItemPrice] = useState(prefernce.price);
    const [itemAvailability, setItemAvailability] = useState('');
    const [selectedValue, setSelectedValue] = useState("in-stock");

    const handleSaveBtn = (itemName) => {
      savedPressed(1);
    };

    return(
        <View>
          <ScrollView>
            <View style={{
                backgroundColor: '#F0EDED',
                width: '100%',
                alignItems: 'center',
                marginTop:20,
                marginBottom: 20, 
                borderRadius: 12
            }}>
            <Image source={prefernce.img} style={styles.itemImg}/>
            </View>
   
            
            <View>
              <Text style={styles.label}>
                Item Name
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Item Name"
                value={itemName}
                onChangeText={setItemName}

            />
            </View>
            
            <View>
              <Text style={styles.label}>
                Item Price
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Item Price"
                value={itemPrice}
                onChangeText={setItemPrice}
            />
            </View>

            <View>
              <Text style={styles.label}>
                Item Description
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Item Description"
                value={itemDescription}
                onChangeText={setItemDescription}
            />
            </View>

            <View>
              <Text style={styles.label}>
                Item Availability
              </Text>
              <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item style={{color: 'black'}}label="In-stock" value="in-stock" />
              <Picker.Item label="Out-stock" value="out-stock" />
            </Picker>
            </View>
            
            <TouchableOpacity
            style={[styles.saveButton, styles.buttonClose]}
            onPress={handleSaveBtn}
            >
            <Text style={styles.buttonTxt}>Save</Text>
            </TouchableOpacity>

            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    
  itemName: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  itemImg: {
    width: 200,
    height: 200,
    
  },

  itemData: {
    fontSize: 23,
    fontWeight: 'bold'
  },

  backButton: {
    width: 50,
    backgroundColor: '#F0EDED',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
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
  picker: {
    height: 50,
    width: 150,
    color: Colors.PRIMARY
  },
  saveButton: {
    backgroundColor: Colors.PRIMARY,
    height: 40,
    width: 130,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10
  },
  buttonTxt : {
    fontSize: 21,
    color: 'white',
    fontWeight: 'bold'
  }
});