import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '../constants/Colors';

export default function Settings() {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Permissions</Text>
      <View style={styles.permissionContainer}>
        <Text style={styles.text}>Camera Permission:</Text>
        <Text style={styles.text}>{hasCameraPermission ? 'Granted' : 'Not Granted'}</Text>
      </View>
      <View style={styles.permissionContainer}>
        <Text style={styles.text}>Gallery Permission:</Text>
        <Text style={styles.text}>{hasGalleryPermission ? 'Granted' : 'Not Granted'}</Text>
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
  text: {
    color: Colors.text,
  },
  permissionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
