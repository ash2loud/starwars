import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import SearchBar from '../components/SearchBar';
import FilmDetail from '../components/FilmDetail';

const { width } = Dimensions.get('window');
const SWIPE_THRESHOLD = 60;

export default function Films() {
  const slideAnim = useRef(new Animated.Value(width)).current;
  const [detailOpen, setDetailOpen] = useState(false);

  function openDetail() {
    setDetailOpen(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  function closeDetail() {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setDetailOpen(false));
  }

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 10 && Math.abs(gestureState.dy) < 20,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -SWIPE_THRESHOLD) {
          openDetail();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <SearchBar />
      <View style={styles.content}>
        <Text style={styles.title}>Films</Text>
        <Image
          source={require('../assets/starwars-logo.png')}
          style={styles.logo}
          contentFit="contain"
          lazy={true}
          transition={400}
          placeholder={null}
        />
        <Text style={styles.hint}>← Swipe left to explore films</Text>
      </View>

      {detailOpen && (
        <FilmDetail slideAnim={slideAnim} onClose={closeDetail} />
      )}
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
  hint: {
    color: '#555',
    fontSize: 13,
    marginTop: 32,
    letterSpacing: 0.5,
  },
});