import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import SearchBar from '../components/SearchBar';

export default function Spaceships() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.content}>
        <Text style={styles.title}>Spaceships</Text>
        <Image
          source={require('../assets/starwars-logo.png')}
          style={styles.logo}
          contentFit="contain"
          lazy={true}
          transition={400}
          placeholder={null}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d1a',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFE81F',
    letterSpacing: 2,
    marginBottom: 32,
  },
  logo: {
    width: 260,
    height: 130,
    marginTop: 16,
  },
});