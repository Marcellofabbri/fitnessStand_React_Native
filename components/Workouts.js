import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity, Animated, Alert, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AddWorkoutBox from './AddWorkoutBox.js';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(workouts[0]);

  const loadWorkouts = async() => {
    try {
      let jsonValue = await AsyncStorage.getItem("workouts");
      if (jsonValue != null) {
        setWorkouts(JSON.parse(jsonValue));
      }
    } catch (error) {
      alert(error);
    }
  }

  const overwriteWorkouts = async(newArray) => {
    try {
      await AsyncStorage.setItem("workouts", JSON.stringify(newArray));
    } catch (error) {
      alert(error);
    } finally {
      await loadWorkouts();
    }
  }

  const saveWorkout = async(workoutToBeAdded) => {
    let workoutsPlus = workouts;
    if (workoutToBeAdded != null && workoutToBeAdded != "") {
      let newWorkout = { name: workoutToBeAdded, key: workouts.length.toString() };
      workoutsPlus.push(newWorkout);
      setWorkouts(workoutsPlus);
      await overwriteWorkouts(workoutsPlus);
    }
  }

  const handlePress = (id) => {
    let chosenWorkoutArray = workouts.filter(workout => workout.key == id);
    let chosenWorkout = chosenWorkoutArray[0];
    setSelectedWorkout(chosenWorkout);
  }

  const handleLongPress = (id, name) => {
    Alert.alert(
      'Delete ' + name + ' and all its data?',
      'Deletion is irreversible and the data for \"' + name + '\" will be deleted forever.',
      [
        { text: 'BACK', onPress: () => {} },
        { text: 'DELETE', onPress: () => removeWorkout(id) }
      ],
      { cancelable: true }
    )
  }

  const removeWorkout = async(id) => {
    let workoutMinus = workouts.filter(workout => workout.key != id);
    await overwriteWorkouts(workoutMinus);
  }

//   const shakeAnimation = new Animated.Value(0);

//   const startShake = () => {
//     Animated.sequence([
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
//     ]);
//  }

  useEffect(() => {
    loadWorkouts();
  }, []);

  return (
      <View 
        style={styles.workoutsContainer}>
        <FlatList
          horizontal={true}
          data={workouts}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={ item == selectedWorkout ?
                styles.workoutElementSelected : styles.workoutElementNormal } 
              testID={item.name}
              onPress={() => handlePress(item.key)}
              onLongPress={() => handleLongPress(item.key, item.name)}>
              <Animated.Text style={styles.workoutText}> {item.name} </Animated.Text>
            </TouchableOpacity>
          )}
        />
        <AddWorkoutBox saveWorkout={saveWorkout}/>
      </View>
  );

}

const styles = StyleSheet.create({
  workoutsContainer: {
    backgroundColor: 'grey',
    height: 100,
    padding: 5,
  },
  workoutElementNormal: {
    backgroundColor: 'red',
    alignSelf: 'baseline',
    padding: 2,
    borderRadius: 4,
    margin: 2,
  },
  workoutElementSelected: {
    backgroundColor: 'blue',
    alignSelf: 'baseline',
    padding: 2,
    borderRadius: 4,
    margin: 2,
  },
  workoutText: {
    color: 'white',
  }
});