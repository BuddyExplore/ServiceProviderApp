import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';

export default function Room({ room }) {
    const subColor = room.checkIn ? "red" : "green";

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable}>
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
                        {room.img && <Image source={{uri: room.img}}
                            style={{
                                width:100,
                                height:100,
                            }}
                        />}
                        <View>
                        <Text style={{
                                color:'black',
                                fontSize:19,
                                fontWeight: 'bold'
                            }}>Room {room.roomNumber}</Text>
                              <Text style={styles.roomType}>Type: {room.roomType}</Text>
                                <Text style={styles.price}>Price: ${room.price} per night</Text>
                                {room.description && <Text style={styles.description}>{room.description}</Text>}
                            {/* <Image source={require("../../../assets/images/Book/4star.png")}
                            style={{
                                width:70,
                                height:20,
                            }} /> */}
                            <Text style={{...styles.subText, color: subColor}}>{room.checkIn ? "Checked In": "Available" }</Text>
                            
                        </View>
                        
                    </View>
                    <View style={{
                        backgroundColor: Colors.PRIMARY,
                        height: 50,
                        width: 90,
                        justifyContent: 'center', // Center the text vertically
                        alignItems: 'center', // Center the text horizontally
                        borderRadius: 10
                    }}>
                        <Text style={{ color: 'white' }}>Details</Text>
                        {/* <Button title="Shop Now" disabled={true}>Shop Now</Button> */}
                    </View>
                </View>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    touchable: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        overflow: 'hidden', // Ensures rounded corners are applied to the image ''
        backgroundColor: 'rgba(0, 0, 0, 0.02)'
    },
    image: {
        width: 100,
        height: '100%',
        justifyContent: 'flex-end', // Positions text at the bottom
    },
    textContainer: {
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background for text visibility
        borderBottomLeftRadius:10,
        justifyContent: 'center',
    },
    likesText: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: 10,
        right: 10,
    },
    mainText: {
        color: 'white',
        fontWeight: 'bold',
    },
    subText: {
        marginTop: 5,
        fontSize: 12
    },

    roomType: {
          fontSize: 14,
          color: '#555',
        },
        price: {
          fontSize: 14,
          color: '#555',
        },
        description: {
          fontSize: 12,
          color: '#777',
        },
        roomImage: {
          width: 100,
          height: 100,
          marginTop: 10,
        }
});