import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

const manager = new BleManager();

export default function BluetoothScreen() {
  const [devices, setDevices] = useState([]);

  const startScan = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        return alert('Permisiunea pentru Bluetooth este necesară.');
      }
    }

    setDevices([]);
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error(error);
        return;
      }
      if (device && !devices.find((d) => d.id === device.id)) {
        setDevices((prev) => [...prev, device]);
      }
    });

    setTimeout(() => manager.stopDeviceScan(), 5000); // scanează 5 sec
  };

  return (
    <View style={styles.container}>
      <Button title="Scanează dispozitive Bluetooth" onPress={startScan} />
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.name || 'Nume necunoscut'} ({item.id})</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }
});
