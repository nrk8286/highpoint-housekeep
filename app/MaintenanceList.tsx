import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { maintenanceRequests } from '../data/maintenance-requests';
import { Colors } from '../constants/Colors';

const MaintenanceListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maintenance Requests</Text>
      <FlatList
        data={maintenanceRequests}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Room: {item.room.roomNumber}</Text>
            <Text style={styles.itemText}>Issue: {item.description}</Text>
            <Text style={styles.itemText}>Status: {item.isResolved ? 'Resolved' : 'Pending'}</Text>
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
  itemContainer: {
    backgroundColor: Colors.buttonBackground,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  itemText: {
    color: Colors.text,
    fontSize: 16,
  },
});

export default MaintenanceListScreen;
