// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AlertScreen from './screens/AlertScreen';
import SensorScreen from './screens/SensorScreen';
import CalendarScreen from './screens/CalendarScreen';
import BluetoothScreen from './screens/BluetoothScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Alerts" component={AlertScreen} />
        <Stack.Screen name="Sensors" component={SensorScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Bluetooth" component={BluetoothScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
