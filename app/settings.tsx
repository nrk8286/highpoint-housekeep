import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '../constants/Colors'; // Added Colors for style consistency

export default function Settings() {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      // Check for camera and media library permissions
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
        <Text style={styles.permissionText}>Camera Permission:</Text>
        <Text style={[styles.permissionText, hasCameraPermission ? styles.granted : styles.notGranted]}>
          {hasCameraPermission === null ? 'Checking...' : (hasCameraPermission ? 'Granted' : 'Not Granted')}
        </Text>
      </View>
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Gallery Permission:</Text>
        <Text style={[styles.permissionText, hasGalleryPermission ? styles.granted : styles.notGranted]}>
          {hasGalleryPermission === null ? 'Checking...' : (hasGalleryPermission ? 'Granted' : 'Not Granted')}
        </Text>
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
  permissionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  permissionText: {
    fontSize: 16,
    color: Colors.text,
  },
  granted: {
    color: 'green',
    fontWeight: 'bold',
  },
  notGranted: {
    color: 'red',
    fontWeight: 'bold',
  },
});