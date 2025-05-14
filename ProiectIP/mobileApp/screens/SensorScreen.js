import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { sendSensorData } from '../services/api';

export default function SensorScreen({ route }) {
  const { userId } = route.params;
  const [bpm, setBpm] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');

  const handleSend = async () => {
    await sendSensorData({
      patient_id: userId,
      ekg_signal: 'simulated',
      heart_rate: bpm,
      bpm: parseInt(bpm),
      temperature: parseFloat(temperature),
      humidity: parseFloat(humidity),
    });
    alert('Datele au fost trimise cu succes.');
    setBpm('');
    setTemperature('');
    setHumidity('');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="BPM" value={bpm} onChangeText={setBpm} style={styles.input} />
      <TextInput placeholder="Temperatură" value={temperature} onChangeText={setTemperature} style={styles.input} />
      <TextInput placeholder="Umiditate" value={humidity} onChangeText={setHumidity} style={styles.input} />
      <Button title="Trimite date senzor" onPress={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 }
});
