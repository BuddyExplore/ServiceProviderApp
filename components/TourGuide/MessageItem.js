import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageItem = ({ sender, text, timestamp }) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.sender}>{sender}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    marginVertical: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
});

export default MessageItem;
