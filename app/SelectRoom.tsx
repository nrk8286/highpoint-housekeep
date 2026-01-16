import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { rooms } from '../data/rooms';
import { Colors } from '../constants/Colors';

const SelectRoomScreen = () => {
  const { side, housekeeper } = useLocalSearchParams();
  const router = useRouter();
  const filteredRooms = rooms.filter(room => room.buildingSide === side);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Room in Side {side}</Text>
      <FlatList
        data={filteredRooms}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.buttonWrapper}>
            <Button 
              title={`Room ${item.roomNumber}`} 
              onPress={() => router.push({ pathname: '/TaskChecklist', params: { room: JSON.stringify(item), housekeeper } })} 
              color={Colors.buttonText}
            />
          </View>
        )}
      />
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
  buttonWrapper: {
    backgroundColor: Colors.buttonBackground,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
});

export default SelectRoomScreen;
