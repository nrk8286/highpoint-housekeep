import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { maintenanceRequests } from '../data/maintenance-requests';
import { v4 as uuidv4 } from 'uuid';
import { Colors } from '../constants/Colors';
import { Room } from '../types/Room';

const MaintenanceRequestScreen = () => {
  const router = useRouter();
  const { room: roomString } = useLocalSearchParams();
  const room: Room = JSON.parse(roomString as string);

  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (description.trim() === '') {
      Alert.alert('Error', 'Please enter a description of the issue.');
      return;
    }

    const newRequest = {
      id: uuidv4(),
      room,
      description,
      timestamp: new Date(),
      isResolved: false,
    };

    maintenanceRequests.push(newRequest);
    Alert.alert('Success', 'Maintenance request submitted successfully.');
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit a Maintenance Request for Room {room.roomNumber}</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe the issue"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <View style={styles.buttonWrapper}>
        <Button title="Submit Request" onPress={handleSubmit} color={Colors.buttonText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 20,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  buttonWrapper: {
    backgroundColor: Colors.buttonBackground,
    borderRadius: 8,
    padding: 10,
  },
});

export default MaintenanceRequestScreen;
