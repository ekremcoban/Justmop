/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MechanicsListScreen2 from './src/screens/MechanicsListScreen2';
import CardsListScreen from './src/screens/CardsListScreen';
import { SCREEN, TITLE } from './src/Utilities/Text';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREEN.MECHANICS_LIST}>
        <Stack.Screen
          name={SCREEN.MECHANICS_LIST}
          component={MechanicsListScreen2}
          options={{ title: TITLE.MECHANISTS }}
        />
        <Stack.Screen 
          name={SCREEN.CARD_LIST} 
          component={CardsListScreen}
          options={{ title: TITLE.CARDS }}
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
