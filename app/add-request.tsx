import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { v4 as uuidv4 } from 'uuid';
import { maintenanceRequests } from '../data/maintenance-requests';
import { MaintenanceRequest } from '../types/MaintenanceRequest';
import { Room } from '../types/Room';
import { Colors } from '../constants/Colors'; // Added Colors for better style consistency

export default function AddRequest() {
  const router = useRouter();
  const [room, setRoom] = useState('');
  const [description, setDescription] = useState('');

  const handleAddRequest = () => {
    if (room.trim() === '' || description.trim() === '') {
        Alert.alert('Validation Error', 'Please fill in both Room Number and Description');
        return;
    }

    const newRoom: Room = {
        id: uuidv4(),
        roomNumber: room,
        buildingSide: 'A', // Assuming a default building side for newly created requests
    }

    const newRequest: MaintenanceRequest = {
      id: uuidv4(),
      room: newRoom,
      description,
      timestamp: new Date(),
      isResolved: false,
    };

    maintenanceRequests.push(newRequest);
    Alert.alert('Success', 'Maintenance request added successfully to the admin list.');

    // Navigate back to the previous screen
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Request</Text>
      <TextInput
        style={styles.input}
        placeholder="Room Number"
        value={room}
        onChangeText={setRoom}
        keyboardType="numeric"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        placeholderTextColor="#666"
      />
      <View style={styles.buttonWrapper}>
          <Button title="Add Request" onPress={handleAddRequest} color={Colors.buttonText} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primary,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.text,
  },
  input: {
    minHeight: 100, // Increased height for description
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlignVertical: 'top',
  },
  buttonWrapper: {
      backgroundColor: Colors.buttonBackground,
      borderRadius: 8,
      padding: 10,
      marginVertical: 5,
  },
});
