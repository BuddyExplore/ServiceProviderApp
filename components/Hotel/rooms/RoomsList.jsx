import { StyleSheet, Text, View , TouchableOpacity, Pressable, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { BottomModal, ModalFooter, ModalTitle, ModalContent, SlideAnimation } from "react-native-modals";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import NewRoom from './NewRoom';
import Room from './Room';
import AddRoomModal from './AddRoomModal';


const RoomsList = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [addRoomModalVisible, setAddRoomModalVisible] = useState(false);

  let roomsList = [
    { id: 1, roomNumber: '101', checkIn: false, roomType: 'Single', price: '100', description: 'A cozy single room', img:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1"},
    { id: 2, roomNumber: '102', checkIn: true, roomType: 'Double', price: '150', description: 'A spacious double room', img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1" },
    { id: 3, roomNumber: '103', checkIn: false, roomType: 'Double', price: '150', description: 'A spacious double room', img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1" }
  ];

  const filters = [
    {id: "0",
      filter: "All"
    }, 
    {
      id: "1",
      filter: "Available"
    },
    {
      id: "2",
      filter: "Checked In"
    }
  ]

  const [filterRooms, setFilterRooms] = useState(roomsList);

  const handleAddRoom = (newRoom) => {
    roomsList = [...roomsList, { ...newRoom, id: roomsList.length + 1, checkedIn: false }];
    setSelectedFilter("All");
    setFilterRooms(roomsList);
  };

  const applyFilter = (filter) => {
    setModalVisible(false);
    switch(filter) {
      case "All": 
      setFilterRooms(roomsList);
      break;

      case "Available":
        const availableRooms = roomsList.filter((room) => !room.checkIn)
        setFilterRooms(availableRooms);
      break;

      case "Checked In":
        const checkedInRooms = roomsList.filter((room) => room.checkIn)
        setFilterRooms(checkedInRooms);
      break;
        
    }
  }

  return (
    <>
    <View >
        <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                alignItems:'center',
                backgroundColor: 'white',
                borderRadius: 20,
                width: 150,
                height: 50,
                marginTop:12,
                marginBottom: 10,
                marginLeft: 10,
                padding: 10
            }}>
        <TouchableOpacity style={styles.touchable} onPress={() => setModalVisible(!modalVisible)}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                alignItems:'center',
                backgroundColor: 'white',
                borderRadius: 20,
                width: 150,
                height: 50,
                marginTop:12,
                marginBottom: 10,
                marginLeft: 10,
                padding: 10
            }}>
                <Ionicons name="options-outline" size={24} color={'black'} />
                <Text>Filter Rooms</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={() => setAddRoomModalVisible(true)}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                
                alignItems:'center',
                backgroundColor: '#4897D9',
                borderRadius: 20,
                width: 120,
                height: 50,
                marginTop:12,
                marginBottom: 10,
                marginLeft: 10,
                padding: 10
            }}>
                <Ionicons name="add-outline" size={24} color={'white'} />
                <Text style={{
                    color: 'white',
                }}>Add Room</Text>
            </View>
        </TouchableOpacity>
        </View>

        <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <Pressable
              onPress={() => applyFilter(selectedFilter)}
              style={{
                paddingRight: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 10,
                marginBottom: 30
              }}
            >
              <Text style={{fontSize: 18, fontWeight: "600"}}>Apply</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Sort and Filter" />}
        modalAnimation={
          new SlideAnimation({
            slide: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{width: "100%", height: 280}}>
          <View style={{flexDirection: "row"}}>
            <View style={{marginVertical: 10, height: 280, flex: 2, borderRightWidth: 1, borderColor: "#E0E0E0"}}>
              <Text style={{textAlign: "center"}}>Sort</Text>
            </View>

            <View style={{flex: 3, margin: 10}}>

              {filters.map((item, index) => (
                <Pressable onPress={() => setSelectedFilter(item.filter)} key={index} style={{flexDirection: "row", alignItems: "center", marginVertical: 10}}>
                  {selectedFilter.includes(item.filter) ? (
                    <FontAwesome name="circle" size={18} color="green" />
                  ) : (
                    <Entypo name="circle" size={18} color="black" />
                  )}

                  <Text style={{fontSize: 16, fontWeight: "500", marginLeft: 6}}>{item.filter}</Text>
                </Pressable>
              ))}
  
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>

<View>

<View style={{
    padding:20,
    paddingBottom:0,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:1,
    alignItems:'center'
}}>
    <Text style={{
        fontSize:15,
        fontFamily:'outfit-bold'
    }}>Rooms List</Text>
    
    {/* <Text style={{
        color:Colors.PRIMARY,
        fontFamily:'outfit-medium'
    }}>View all</Text> */}
</View>

<ScrollView>
  


{filterRooms.map((item, index) => (
        <Room room={item} keyExtractor={(item) => item.id.toString()}/>
    ))}
{/* <FlatList 
    showsHorizontalScrollIndicator={false}
    data={preferencesList}
    horizontal={false}
    renderItem={({item, index}) => (
        
    )}
/> */}
</ScrollView>

</View>

<AddRoomModal
        isVisible={addRoomModalVisible}
        onClose={() => setAddRoomModalVisible(false)}
        onAddRoom={handleAddRoom}
      />
</>
  )
}

export default RoomsList

const styles = StyleSheet.create({})