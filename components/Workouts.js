import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([
    { name: 'Legs', key: 0 },
    { name: 'Chest', key: 1 },
    { name: 'Abs', key: 2 },
    { name: 'Back', key: 3 }
  ])

  return (
    <View 
      style={styles.workoutsContainer}>
      <FlatList
        horizontal={true}
        data={workouts}
        renderItem={({item}) => (
          <View style={styles.workoutElement}>
            <Text style={styles.workoutText}> {item.name} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  workoutsContainer: {
    backgroundColor: 'grey',
    height: 100,
    
  },
  workoutElement: {
    backgroundColor: 'red',
    alignSelf: 'baseline',
    padding: 2,
    borderRadius: 4,
    margin: 2,
  },
  workoutText: {
    color: 'white'
  }
});