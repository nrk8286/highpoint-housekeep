import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { Link } from 'expo-router';
import { completionLogs } from '../data/completion-logs';
import { VictoryPie } from "victory-native";
import { Colors } from '../constants/Colors';

const AdminScreen = () => {

    const getCleaningTypeStats = () => {
        const standard = completionLogs.filter(log => log.taskType === 'standard').length;
        const deep = completionLogs.filter(log => log.taskType === 'deep').length;
        return [{ x: 'Standard', y: standard }, { x: 'Deep', y: deep }];
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Admin Dashboard</Text>

            <View style={styles.buttonWrapper}>
                <Link href="/MaintenanceList" asChild>
                    <Button title="View Maintenance Requests" color={Colors.buttonText} />
                </Link>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Cleaning Type Distribution</Text>
                <VictoryPie 
                    data={getCleaningTypeStats()} 
                    x="x" 
                    y="y" 
                    colorScale={[Colors.accent, Colors.secondary]} 
                    style={{ labels: { fill: Colors.text } }}
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>All Completion Logs</Text>
                {completionLogs.map(log => (
                    <View key={log.id} style={styles.logEntry}>
                        <Text style={styles.logHeader}>Room: {log.room.roomNumber} ({log.taskType})</Text>
                        <Text style={styles.logText}>Timestamp: {new Date(log.timestamp).toLocaleString()}</Text>
                        <Text style={styles.logText}>Tasks:</Text>
                        {log.completedTasks.map(task => (
                            <Text key={task.id} style={styles.logText}>- {task.name}</Text>
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.primary,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: Colors.text,
    },
    section: {
        marginBottom: 20,
        backgroundColor: Colors.cardBackground,
        borderRadius: 8,
        padding: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Colors.text,
    },
    logEntry: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    logHeader: {
        fontWeight: 'bold',
        color: Colors.accent,
    },
    logText: {
        color: Colors.text,
    },
    buttonWrapper: {
        backgroundColor: Colors.buttonBackground,
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
    },
});

export default AdminScreen;
