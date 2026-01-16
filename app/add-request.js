
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { maintenanceRequests } from '../data/maintenance-requests';

export default function AddRequest({ navigation }) {
  const [room, setRoom] = useState('');
  const [description, setDescription] = useState('');

  const handleAddRequest = () => {
    const newRequest = {
      id: uuidv4(),
      room: {
        id: uuidv4(),
        roomNumber: room,
        buildingSide: 'A', // Assuming a default building side
      },
      description,
      timestamp: new Date(),
      isResolved: false,
    };

    maintenanceRequests.push(newRequest);

    // Navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Request</Text>
      <TextInput
        style={styles.input}
        placeholder="Room Number"
        value={room}
        onChangeText={setRoom}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Request" onPress={handleAddRequest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
