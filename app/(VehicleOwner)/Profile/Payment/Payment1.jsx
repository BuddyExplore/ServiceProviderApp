import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Dimensions } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../../../constants/Colors';
import { useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
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
    
    <View style={styles.container}>
      <View style={{backgroundColor:"white",marginVertical:90,padding:16}}>
      
      <Text style={styles.title}>Payment Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        secureTextEntry
      />
      <LinearGradient colors={[Colors.PRIMARY, Colors.PRIMARY+"AA"]}
          start={{x:1, y:0}}
          end={{x:0, y:0}} 
          style={{borderRadius:10}}>
      <Text style={{fontSize:20,padding:10,textAlign:"center",color:"white"}}  onPress={()=>{navigation.navigate("Payment2")}} >Next</Text>
      </LinearGradient>
      </View>
    </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:Colors.PRIMARY+"AA",
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
  },
});

export default Payment1;
