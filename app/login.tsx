import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { housekeepers } from '../data/housekeepers';
import { Housekeeper } from '../types/Housekeeper';
import { Colors } from '../constants/Colors';

const LoginScreen = () => {
  const router = useRouter();

  const handleLogin = (housekeeper: Housekeeper) => {
    router.push({ pathname: '/', params: { housekeeper: JSON.stringify(housekeeper) } });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/High-Point-Quincy-Logo-FOR-DARK-BG__TRANS-2048x1365.png')} style={styles.logo} />
      <Text style={styles.title}>Select Your Name</Text>
      <FlatList
        data={housekeepers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.buttonWrapper}>
            <Button
              title={item.name}
              onPress={() => handleLogin(item)}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    color: Colors.text,
    marginBottom: 20,
  },
  buttonWrapper: {
    backgroundColor: Colors.buttonBackground,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    width: 200,
  },
});

export default LoginScreen;
