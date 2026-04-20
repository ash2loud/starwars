import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function Planets() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.content}>
        <Text style={styles.title}>Planets</Text>
        {!imageLoaded && (
          <ActivityIndicator
            size="large"
            color="#FFE81F"
            style={styles.loader}
          />
        )}
        <Image
          source={require('../assets/starwars-logo.png')}
          style={[styles.logo, !imageLoaded && styles.hidden]}
          onLoad={() => setImageLoaded(true)}
          resizeMode="contain"
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
  loader: {
    marginTop: 16,
  },
  logo: {
    width: 260,
    height: 130,
    marginTop: 16,
  },
  hidden: {
    opacity: 0,
    position: 'absolute',
  },
});