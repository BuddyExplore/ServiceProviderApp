import { StyleSheet, Text, View, FlatList, ScrollView, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BookingCard from '../../../components/Hotel/BookingCard';
import Header from '../../../components/Hotel/Header';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';


const bookingData = [
  {
    bookingId: "001",
    guestName: "John Doe",
    checkInDate: "2024-08-01",
    checkOutDate: "2024-08-05",
    roomNumber: "101",
    status: "Completed"
  },
  {
    bookingId: "002",
    guestName: "Jane Smith",
    checkInDate: "2024-08-10",
    checkOutDate: "2024-08-15",
    roomNumber: "102",
    status: "Completed"
  },
  {
    bookingId: "003",
    guestName: "Mike Johnson",
    checkInDate: "2024-08-20",
    checkOutDate: "2024-08-25",
    roomNumber: "103",
    status: "Checked In"
  }
];


const Bookings = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Header subText={"Manage your"} mainText={"Bookings"} />
      <View style={styles.container}>
        <FlatList
          data={bookingData}
          keyExtractor={item => item.bookingId}
          renderItem={({ item }) => <BookingCard booking={item}  />}
        />
      </View>

      
      {/* <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedBooking && (
              <>
                <Text style={styles.modalTitle}>Booking Details</Text>
                <Text>Guest Name: {selectedBooking.guestName}</Text>
                <Text>Booking ID: {selectedBooking.bookingId}</Text>
                <Text>Room Number: {selectedBooking.roomNumber}</Text>
                <Text>Check-in: {selectedBooking.checkInDate}</Text>
                <Text>Check-out: {selectedBooking.checkOutDate}</Text>
                <Text style={{ color: getStatusColor(selectedBooking.status) }}>Status: {selectedBooking.status}</Text>
                <Button title="Close" onPress={closeModal} />
              </>
            )}
          </View>
        </View>
      </Modal> */}
    </View>
  )
}

export default Bookings


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  card: {
    marginVertical: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
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
centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },

modalView: {
height: '90%',
width: '100%',
// margin: 20,
backgroundColor: 'white',
borderRadius: 20,
padding: 35,
// alignItems: 'center',
shadowColor: '#000',
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5,
},
itemName: {
fontSize: 28,
fontWeight: 'bold'
},
itemImg: {
width: 200,
height: 200,

},

backButton: {
width: 50,
backgroundColor: '#F0EDED',
borderRadius: 20,
padding: 10,
elevation: 2,
},
editButton: {
backgroundColor: Colors.PRIMARY,
height: 50,
width: 150,
display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 20
},
buttonTxt : {
fontSize: 23,
color: 'white',
fontWeight: 'bold'
}

});