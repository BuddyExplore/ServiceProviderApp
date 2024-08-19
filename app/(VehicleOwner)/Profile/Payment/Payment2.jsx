import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Dimensions } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
const Payment1 = () => {
    const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = () => {
    // Handle the payment submission logic here
    Alert.alert('Payment Submitted', 'Your payment has been processed successfully!');
  };

  return (
    <GestureHandlerRootView>
    <ScrollView >
    <View style={styles.container}>
      <View style={{backgroundColor:"white",marginVertical:90,padding:16}}>
      
      <Text style={styles.subtitle}>Billing Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Address Line 1"
        value={address1}
        onChangeText={setAddress1}
      />
      <TextInput
        style={styles.input}
        placeholder="Address Line 2"
        value={address2}
        onChangeText={setAddress2}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="State/Province"
        value={state}
        onChangeText={setState}
      />
      <TextInput
        style={styles.input}
        placeholder="Postal Code"
        value={postalCode}
        onChangeText={setPostalCode}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <LinearGradient colors={[Colors.PRIMARY, Colors.PRIMARY+"AA"]}
          start={{x:1, y:0}}
          end={{x:0, y:0}} 
          style={{borderRadius:10,marginVertical:20}}>
      <Text style={{fontSize:20,padding:10,textAlign:"center",color:"white"}}  onPress={handleSubmit} >Submit</Text>
      </LinearGradient>
      <Text style={{fontSize:20,padding:8,textAlign:"center",color:Colors.PRIMARY,borderColor:Colors.PRIMARY,borderWidth:2,borderRadius:10}}  onPress={()=>{navigation.navigate("Payment1")}} >Back</Text>
      
      </View>
    </View>
    </ScrollView></GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:Dimensions.get("screen").height,
    padding: 20,
    backgroundColor:"white",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
});

export default Payment1;
