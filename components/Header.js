import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.headline}>FITNESSSTAND</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      backgroundColor: 'coral',
      height: 80,
    },
    headline: {
      fontSize: 50,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center'
    }
  });