/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileInfo from './src/screens/ProfileInfo';
import EpisodeScreen from './src/screens/EpisodeScreen';
import EpisodeDetails from './src/screens/EpisodeDetails';
import LocationScreen from './src/screens/LocationScreen';
import OriginScreen from './src/screens/OriginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ animation: 'default' }}
        />
        <Stack.Screen
          name="ProfileInfo"
          component={ProfileInfo}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="EpisodeScreen"
          component={EpisodeScreen}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="EpisodeDetails"
          component={EpisodeDetails}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="OriginScreen"
          component={OriginScreen}
          options={{ animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
