import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Payment_premium = ({ navigation }) => {
  const handlePayment = () => {
    navigation.navigate('Dashboard');
  };
  const back = () => {
    navigation.navigate('Advertise Tour Guide');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.title}>Payment</Text>
      <Text style={styles.subtitle}>Complete your payment to activate the premium package.</Text>
      <Button title="Pay Now" onPress={handlePayment} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Payment_premium;

