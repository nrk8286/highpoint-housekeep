import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '../constants/Colors';

export default function Settings() {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState<boolean | null>(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        if (isMounted) {
          setHasCameraPermission(cameraStatus.status === 'granted');

        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (isMounted) {
          setHasGalleryPermission(galleryStatus.status === 'granted');
        }
      } catch {
        if (isMounted) {
          setHasCameraPermission(false);
          setHasGalleryPermission(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
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
