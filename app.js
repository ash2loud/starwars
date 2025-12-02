import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // New Import!

// --- Screen Components (Unchanged) ---
const BaseScreen = ({ name }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{name}</Text>
  </View>
);

const PlanetsScreen = () => <BaseScreen name="Planets" />;
const FilmsScreen = () => <BaseScreen name="Films" />;
const SpaceshipsScreen = () => <BaseScreen name="Spaceships" />;

// --- Navigators Setup ---
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // Stack Navigator instance

const TabNavigator = () => (
  // iOS Tabs Navigator (Unchanged)
  <Tab.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#1f2937' },
      headerTintColor: '#ffe81f',
      tabBarActiveTintColor: '#ffe81f',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#1f2937' },
    }}
  >
    <Tab.Screen name="Planets" component={PlanetsScreen} />
    <Tab.Screen name="Films" component={FilmsScreen} />
    <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
  </Tab.Navigator>
);

const StackNavigator = () => (
  // Android Stack Navigator (Alternative to Drawer)
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#1f2937' },
      headerTintColor: '#ffe81f',
    }}
  >
    <Stack.Screen name="Planets" component={PlanetsScreen} />
    <Stack.Screen name="Films" component={FilmsScreen} />
    <Stack.Screen name="Spaceships" component={SpaceshipsScreen} />
  </Stack.Navigator>
);

// --- Platform-Specific Root Navigator ---
const AppNavigator = () => {
  if (Platform.OS === 'ios') {
    return <TabNavigator />;
  }
  // Use the simpler Stack Navigator for Android
  return <StackNavigator />;
};

// --- Main App Component ---
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

// --- Styles (Unchanged) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffe81f',
    textTransform: 'uppercase',
  },
});