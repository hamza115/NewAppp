import React, {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './components/BottomNavigator';
import {useFonts, Asap_600SemiBold} from '@expo-google-fonts/asap';

export default function App() {
  const [fontsLoaded] = useFonts({
    AsapSemi: Asap_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
