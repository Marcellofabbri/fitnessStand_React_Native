import { clearUpdateCacheExperimentalAsync } from 'expo-updates';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { interpolate } from 'react-native-reanimated';
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import renderer, { act, create } from 'react-test-renderer';
import Workouts from '../../components/Workouts.js';

// test('Workouts snapshot', () => {
//   const snap = renderer.create(
//     <Workouts />
//   ).toJSON();

//   expect(snap).toMatchSnapshot();
// }

const tree = create(<Workouts />);
jest.runAllTimers();

test('AddWorkoutBox adds a workout', () => {
  //enter the text in the input box
  const inputBox = tree.root.findByProps({ testID: 'input'}).props;
  act(() => inputBox.onChangeText('myTestWorkout1'));

  //click the confirmation button
  const button = tree.root.findByProps({ testID: 'addWorkoutButton'}).props;
  act(() => button.onPress());
  
  const workoutElement = tree.root.findByProps({ testID: 'myTestWorkout1' }).props;
  expect(workoutElement).toBeDefined();
})



// test('AddWorkoutBox adds a workout', () => {
//   const {debut, getByTestId, getByText, queryByText, getAllByText } = render(<Workouts />);
//   const box = getByTestId('input');
//   const plusButton = getByTestId('addWorkoutButton');
//   fireEvent.changeText(box, 'Abs');
//   fireEvent.press(plusButton);
//     let abs = getByText('Abs');
//     expect(abs).toBeDefined();
//   }
// });

// test('AddWorkoutBox does not add a workout if its name is already taken', () => {
//   const {debut, getByTestId, getByText, queryByText, getAllByText } = render(<Workouts />)
//   const box = getByTestId('input');
//   const plusButton = getByTestId('addWorkoutButton');
//   async() => {
//     await fireEvent.changeText(box, 'Deltoids');
//     await fireEvent.press(plusButton);
//     let deltoids = getAllByText('Deltoids');
//     expect(deltoids.length).toBe(3);
//   }
//   async() => {
//     await fireEvent.changeText(box, 'Deltoids');
//     await fireEvent.press(plusButton);
//     let deltoids = getAllByText('Deltoids');
//     expect(deltoids.length).toBe(1);
//     expect(deltoids).
//   }
// });

