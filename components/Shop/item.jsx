import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image , Modal , Pressable } from 'react-native';
import React , {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import ItemDetails from "./ItemDetails"
import EditItem from "./EditItem"

export default function GuidesListItem({ prefernce }) {
  const
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
                        <Image source={prefernce.img}
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
                            }}>{prefernce.name}</Text>
                        <Text style={{
                                color:'black',
                                fontSize:15,
                            }}>{prefernce.price}</Text>
                            {/* <Image source={require("../../../assets/images/Book/4star.png")}
                            style={{
                                width:70,
                                height:20,
                            }} /> */}
              <Text style={styles.subText}>In-Stock</Text>
            </View>
          </View>
          <Ionicons
            name="ellipsis-vertical-outline"
            size={24}
            color={"black"}
          />
        </View>
      </TouchableOpacity>

            
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>

            
            <TouchableOpacity
              style={[styles.button, styles.backButton]}
              onPress={handleBack}
            >
              <Ionicons name="arrow-back-outline" size={26} color={'black'} /> 
            </TouchableOpacity>
            <Text style={styles.itemName}>  Item Details</Text>

            </View>
            {displayDetails && <ItemDetails prefernce={prefernce} openEdit={handleOpenEdit}/>}
            {displayEdit && <EditItem prefernce={prefernce} savedPressed={handleSaved}/>}
            {/* <ItemDetails prefernce={prefernce}/> */}
            {/* <EditItem prefernce={prefernce} closeEdit={handleEdited}/> */}
            
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
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
        color: 'green',
        fontSize: 12
    },
});
