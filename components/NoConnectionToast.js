import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet, View } from 'react-native';

export default function NoConnectionToast({ visible }) {
  const slideAnim = useRef(new Animated.Value(-60)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -60,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View
      style={[styles.toast, { transform: [{ translateY: slideAnim }] }]}
      pointerEvents="none"
    >
      <Text style={styles.icon}>⚠️</Text>
      <Text style={styles.text}>No internet connection</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: '#b00020',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 8,
  },
  icon: {
    fontSize: 16,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
