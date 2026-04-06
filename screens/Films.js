import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Films() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Films</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d1a',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFE81F',
    letterSpacing: 2,
  },
});
