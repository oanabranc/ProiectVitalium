import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { getRecommendations } from '../services/api';

export default function CalendarScreen({ route }) {
  const { userId } = route.params;
  const [items, setItems] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const res = await getRecommendations(userId);
      const grouped = {};

      res.data.forEach((rec) => {
        const dateKey = rec.created_at?.split('T')[0]; // yyyy-mm-dd
        if (!grouped[dateKey]) grouped[dateKey] = [];
        grouped[dateKey].push({
          name: `${rec.activity_type} - ${rec.duration}`,
          height: 50
        });
      });

      setItems(grouped);
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        selected={Object.keys(items)[0]}
        renderItem={(item) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  item: { backgroundColor: 'white', padding: 10, marginVertical: 5, borderRadius: 5 }
});
