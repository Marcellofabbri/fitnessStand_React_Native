import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js';
import IndividualCalendar from './components/InduvidualCalendar.js';
import Workouts from './components/Workouts.js';

export default function App() {
  const [selectedWorkout, setSelectedWorkout] = useState();

  return (
      <View style={styles.container}>
        <Header />
        <Workouts />
        <IndividualCalendar />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
