import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js';
import Workouts from './components/Workouts.js';

export default function App() {
  return (
      <View style={styles.container}>
        <Header />
        <Workouts />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
