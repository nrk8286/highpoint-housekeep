import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter, Link } from 'expo-router';
import { Housekeeper } from '../types/Housekeeper';
import { Colors } from '../constants/Colors';

const SelectSideScreen = () => {
  const router = useRouter();
  const { housekeeper: housekeeperString } = useLocalSearchParams();

  if (!housekeeperString) {
    return (
        <View style={styles.container}>
            <Text style={styles.infoText}>Please log in.</Text>
            <Link href="/login" asChild>
                <View style={styles.buttonWrapper}>
                    <Button title="Go to Login" color={Colors.buttonText} />
                </View>
            </Link>
        </View>
    );
  }

  const housekeeper: Housekeeper = JSON.parse(housekeeperString as string);

  let sides: string[] = [];
  if (housekeeper.name === 'Audry') {
    sides = ['A', 'D'];
  } else if (housekeeper.name === 'Hannah Steele') {
    sides = ['B', 'C'];
  }

  const handleSelectSide = (side: string) => {
    router.push({ 
      pathname: '/SelectRoom', 
      params: { 
        side, 
        housekeeper: housekeeperString 
      } 
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {housekeeper.name}!</Text>
      <Text style={styles.instructionText}>Select a Building Side to begin your cleaning tasks for the day.</Text>
      <FlatList
        data={sides}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.buttonWrapper}>
            <Button title={`Side ${item}`} onPress={() => handleSelectSide(item)} color={Colors.buttonText} />
          </View>
        )}
      />
       <View style={{ marginTop: 40 }}>
         <Link href="/admin" asChild>
            <View style={styles.buttonWrapper}>
                <Button title="Go to Admin Page" color={Colors.buttonText} />
            </View>
         </Link>
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
    welcomeText: {
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20,
        color: Colors.text,
    },
    instructionText: {
        fontSize: 18, 
        marginBottom: 10,
        color: Colors.text,
    },
    infoText: {
        fontSize: 18, 
        color: Colors.text,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonWrapper: {
        backgroundColor: Colors.buttonBackground,
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
    },
});

export default SelectSideScreen;
