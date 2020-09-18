import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function AddWorkoutBox ({saveWorkout}) {
  const [workoutToBeAdded, setWorkoutToBeAdded] = useState();

  const callSaveFunctionFromParent = () => {
    let newWorkout = workoutToBeAdded;
    saveWorkout(newWorkout);
  }

  // const saveWorkout = async() => {
  //   if (workoutToBeAdded != null && workoutToBeAdded != "") {
  //     let newWorkout = { name: workoutToBeAdded, key: workouts.length };
  //     workouts.push(newWorkout);
  //     try {
  //       await AsyncStorage.setItem("workouts", JSON.stringify(workouts));
  //     } catch (error) {
  //       alert(error);
  //     }

  //   }
  // }

  return (
    <View style={styles.boxNbutton}>
      <TextInput
        testID='input'
        style={styles.searchWorkouts}
        placeholder='Type'
        onChangeText={ text => setWorkoutToBeAdded(text) }
      />
      <View style={styles.addWorkoutButtonContainer}>
        <Button 
          testID='addWorkoutButton'
          onPress={ callSaveFunctionFromParent }
          color='green'
          title='+' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchWorkouts: {
    paddingVertical: 0,
    paddingHorizontal: 5,
    height: 35,
    width: 180,
    backgroundColor: 'white',
    marginRight: 10,
    marginVertical: 2,
    borderRadius: 5
  },
  addWorkoutButtonContainer: {
    width: 32,
  },
  boxNbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
  }
});

