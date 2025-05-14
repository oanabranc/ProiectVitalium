import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { getRecommendations } from '../services/api';

export default function HomeScreen({ route, navigation }) {
  const [recommendations, setRecommendations] = useState([]);
  const { userId } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRecommendations(userId);
        setRecommendations(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomandări:</Text>
      <Button title="Alerte" onPress={() => navigation.navigate('Alerts', { userId })} />
      <Button title="Trimite date senzor" onPress={() => navigation.navigate('Sensors', { userId })} />
      <Button title="Calendar activități" onPress={() => navigation.navigate('Calendar', { userId })} />
      <Button title="Bluetooth" onPress={() => navigation.navigate('Bluetooth')} />
      <Button title="Calendar activități" onPress={() => navigation.navigate('Calendar', { userId })} />
      <Button title="Bluetooth" onPress={() => navigation.navigate('Bluetooth')} />



      <FlatList
        data={recommendations}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.activity_type} - {item.duration}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  item: { marginBottom: 8 }
});
