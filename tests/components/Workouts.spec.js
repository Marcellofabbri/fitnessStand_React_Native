import { clearUpdateCacheExperimentalAsync } from 'expo-updates';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { interpolate } from 'react-native-reanimated';
import { render, fireEvent } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import Workouts from '../../components/Workouts.js';

// test('Workouts snapshot', () => {
//   const snap = renderer.create(
//     <Workouts />
//   ).toJSON();

//   expect(snap).toMatchSnapshot();
// }

const {debut, getByTestId, getByText, queryByText } = render(<Workouts />)

test('AddWorkoutBox adds a workout', () => {
  const box = getByTestId('input');
  const plusButton = getByTestId('addWorkoutButton');
  async() => {
    await fireEvent.changeText(box, 'Abs');
    await fireEvent.press(plusButton);
    let abs = getByText('Abs');
    expect(abs).toBeDefined();
  }
});

