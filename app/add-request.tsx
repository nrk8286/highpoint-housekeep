import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { v4 as uuidv4 } from 'uuid';
import { maintenanceRequests } from '../data/maintenance-requests';
import { Colors } from '../constants/Colors';

export default function AddRequest() {
  const router = useRouter();
  const [room, setRoom] = useState('');
  const [description, setDescription] = useState('');

  const handleAddRequest = () => {
    if (!room.trim() || !description.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const newRequest = {
      id: uuidv4(),
      room: {
        id: uuidv4(),
        roomNumber: room,
        buildingSide: 'A', // Default building side
      },
      description,
      timestamp: new Date(),
      isResolved: false,
    };

    maintenanceRequests.push(newRequest);
    Alert.alert('Success', 'Request added successfully.');
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Request</Text>
      <TextInput
        style={styles.input}
        placeholder="Room Number"
        placeholderTextColor={Colors.accent}
        value={room}
        onChangeText={setRoom}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor={Colors.accent}
        value={description}
        onChangeText={setDescription}
        multiline
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
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    minHeight: 40,
    color: Colors.primary,
  },
  buttonWrapper: {
    backgroundColor: Colors.buttonBackground,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
});
