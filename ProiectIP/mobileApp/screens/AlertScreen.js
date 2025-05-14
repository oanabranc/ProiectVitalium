import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { getAlerts, sendAlert } from '../services/api';

export default function AlertScreen({ route }) {
  const { userId } = route.params;
  const [alerts, setAlerts] = useState([]);
  const [message, setMessage] = useState('');

  const fetchAlerts = async () => {
    const res = await getAlerts(userId);
    setAlerts(res.data);
  };

  const handleSend = async () => {
    if (message.trim()) {
      await sendAlert({ patient_id: userId, message });
      setMessage('');
      fetchAlerts();
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alerte:</Text>
      <FlatList
        data={alerts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Text style={styles.alert}>{item.message} - {new Date(item.timestamp).toLocaleString()}</Text>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Introduceți alertă nouă"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Trimite alertă" onPress={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  alert: { marginBottom: 8 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 }
});
