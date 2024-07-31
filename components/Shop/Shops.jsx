import { StyleSheet, Text, View , TouchableOpacity , Image} from 'react-native'
import React , {useState} from 'react'
import { Ionicons } from '@expo/vector-icons'
import RegisterShop from './RegisterShop'

const Shops = ({onPress1}) => {
    const handlePress = () => {
        onPress1(1);
    }

    const [showModal, setShowModal] = useState(false);

    handleShowModal = () => {
        setShowModal(true);
    }

    handleCloseModal = (itemName) => {
        if(itemName === 1 ){
            setShowModal(false);
        }
        
    }

  return (
    <View>
      <TouchableOpacity style={styles.button2} onPress={() => {setShowModal(true)}}>
        <Text><Ionicons name="add-circle-outline" size={26}/></Text>
        <Text style={styles.buttonText1}>Register new shop</Text>
      </TouchableOpacity>
        <View style={{width:'100%', paddingHorizontal: 15}}>
        <View style={{
            
            width: '100%',
          
            borderRadius: 20,
            marginVertical: 10
        }}>
            <View style={{width: '100%', paddingVertical: 10, borderRadius: 20}}><Text style={styles.topic}>Shops currently owned</Text></View>

            <TouchableOpacity style={styles.touchable} onPress={handlePress}>
                <View style={{
                display:'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 20,
                backgroundColor:'white',
                paddingRight: 20
                }}> 
                        <View style={{
                        display:'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 20,
                        backgroundColor:'white'
                    }}>
                        <Image source={require('../../assets/images/Shop/shop.jpg')}
                            style={{
                                width:100,
                                height:100,
                            }}
                        />
                        <View>
                        <Text style={{
                                color:'black',
                                fontSize:19,
                                fontWeight: 'bold'
                            }}>Royal Batiks</Text>
                        <Text style={{
                                color:'grey',
                                fontSize:15,
                            }}>3 Orders</Text>
                            {/* <Image source={require("../../../assets/images/Book/4star.png")}
                            style={{
                                width:70,
                                height:20,
                            }} /> */}
                            
                        </View>
                        
                    </View>
                    <Ionicons name="ellipsis-vertical-outline" size={24} color={'black'} />
                </View>
            </TouchableOpacity>

        </View>
      </View>

      {showModal && <RegisterShop visibility={showModal} closeModal={handleCloseModal}/>}
    </View>
  )
}

export default Shops

const styles = StyleSheet.create({
    button2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white', // Background color
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 10, // Vertical padding // Horizontal padding
    borderRadius: 5, // Rounded corners
    alignItems: 'center',
    margin: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E3E3E3'
  },
  buttonText1: {
    color: 'black', // Text color
    fontSize: 16, // Text size
    fontWeight: 'bold', // Text weight
  },
  topic: {
    // alignSelf: 'center',
    fontSize: 17,
    color: 'black',
    fontWeight: '300'
  },
  touchable: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    overflow: 'hidden', // Ensures rounded corners are applied to the image ''
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    alignSelf: 'center',
    marginVertical: 10
},
image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end', // Positions text at the bottom
},
})