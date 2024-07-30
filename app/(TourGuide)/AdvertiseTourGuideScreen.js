import React from 'react';
import { View, Text, Button, StyleSheet,Image,Dimensions ,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tg from '../../assets/images/TourGuide/tg-1.jpg';
import Header from "../../components/TourGuide/header";

const TourGuideAdvertiseScreen = ({ navigation }) => {
  const handleRegister = () => {
    // Handle registration logic here
    // After registration, navigate to payment screen
    navigation.navigate('Payment_Premium');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Advertisment" navigation={navigation}/>
      <Text style={styles.title}>Advertise as a Tour Guide</Text>
    
      
        <Image source={tg} 
          style={{ height:205, width: "100%" }}
          resizeMethod="resize"
          blurRadius={1}
          
         />
      
           
        
      <Text style={styles.subtitle}>Join our premium package and boost your visibility!</Text>
      
      <View style={styles.formContainer}>
          <TextInput
            placeholder="Full Name"
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            placeholder="Phone Number"
            style={styles.input}
          />
          <TextInput
            placeholder="Experience"
            style={styles.input}
          />
          <TextInput
            placeholder="Certifications"
            style={styles.input}
          />
          <Button title="Register Now" onPress={handleRegister} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'lightblue',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 1,
    justifyContent: "center",
  },
  
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
 
});

export default TourGuideAdvertiseScreen;

