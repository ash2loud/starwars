import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PlanetsScreen from './screens/Planets';
import FilmsScreen from './screens/Films';
import SpaceshipsScreen from './screens/Spaceships';
import NoConnectionToast from './components/NoConnectionToast';
import useNetworkStatus from './hooks/useNetworkStatus';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function IOSNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFE81F',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#1a1a2e' },
        headerStyle: { backgroundColor: '#1a1a2e' },
        headerTintColor: '#FFE81F',
      }}
    >
      <Tab.Screen name="Planets" component={PlanetsScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
      <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
    </Tab.Navigator>
  );
}

function AndroidNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#FFE81F',
        drawerInactiveTintColor: '#ccc',
        drawerStyle: { backgroundColor: '#1a1a2e' },
        headerStyle: { backgroundColor: '#1a1a2e' },
        headerTintColor: '#FFE81F',
      }}
    >
      <Drawer.Screen name="Planets" component={PlanetsScreen} />
      <Drawer.Screen name="Films" component={FilmsScreen} />
      <Drawer.Screen name="Spaceships" component={SpaceshipsScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const isConnected = useNetworkStatus();

  return (
    <View style={styles.root}>
      <NavigationContainer>
        {Platform.OS === 'ios' ? <IOSNavigator /> : <AndroidNavigator />}
      </NavigationContainer>
      <NoConnectionToast visible={!isConnected} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});