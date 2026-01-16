import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { tasks } from '../data/tasks';
import { Task } from '../types/Task';
import { Room } from '../types/Room';
import { Housekeeper } from '../types/Housekeeper';
import { completionLogs } from '../data/completion-logs';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Colors } from '../constants/Colors';

const TaskChecklistScreen = () => {
  const { room: roomString, housekeeper: housekeeperString } = useLocalSearchParams();
  const room: Room = JSON.parse(roomString as string);
  const housekeeper: Housekeeper = JSON.parse(housekeeperString as string);
  const router = useRouter();

  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [taskType, setTaskType] = useState<'standard' | 'deep' | null>(null);

  const handleToggleTask = (taskId: string) => {
    setCompletedTasks(prev => 
        prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

  const handleSaveAndGoBack = () => {
    const allTasks = tasks.filter(t => t.subCategory === taskType);
    const completedTaskObjects = allTasks.filter(task => completedTasks.includes(task.id));

    if (completedTaskObjects.length > 0) {
        const newLog = {
            id: uuidv4(),
            room,
            housekeeper,
            completedTasks: completedTaskObjects,
            timestamp: new Date(),
            taskType: taskType
        };
        completionLogs.push(newLog);
        console.log('New log added:', newLog);
    }
    router.back();
  };

  const renderTaskList = () => {
    const filteredTasks = tasks.filter(t => t.subCategory === taskType);
    return (
        <FlatList
            data={filteredTasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={styles.taskItem}>
                    <Text style={styles.taskText}>{item.name}</Text>
                    <Button 
                        title={completedTasks.includes(item.id) ? 'Undo' : 'Complete'} 
                        onPress={() => handleToggleTask(item.id)} 
                        color={Colors.buttonBackground}
                    />
                </View>
            )}
        />
    );
  };

  if (!taskType) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Select Cleaning Type for Room {room.roomNumber}</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonWrapper}>
                <Button title="Standard Clean" onPress={() => setTaskType('standard')} color={Colors.buttonText} />
              </View>
              <View style={styles.buttonWrapper}>
                <Button title="Deep Clean" onPress={() => setTaskType('deep')} color={Colors.buttonText}/>
              </View>
            </View>
        </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tasks for Room {room.roomNumber} ({taskType} clean)</Text>
      {renderTaskList()}
      <View style={styles.buttonWrapper}>
        <Button title="Save and Go Back" onPress={handleSaveAndGoBack} color={Colors.buttonText}/>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Submit Maintenance Request" onPress={() => router.push({ pathname: 'MaintenanceRequest', params: { room: roomString } })} color={Colors.buttonText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.primary,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: Colors.text,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.accent,
    },
    taskText: {
        color: Colors.text,
    },
    buttonWrapper: {
        backgroundColor: Colors.buttonBackground,
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
    },
});

export default TaskChecklistScreen;
