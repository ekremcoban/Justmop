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
import MechanicsListScreen from './src/screens/MechanicsListScreen';
import CardsListScreen from './src/screens/CardsListScreen';
import CardSearchScreen from './src/screens/CardSearchScreen';
import { SCREEN, TITLE } from './src/Utilities/Text';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN.MECHANICS_LIST}
          component={MechanicsListScreen}
          options={{ title: TITLE.MECHANISTS }}
        />
        <Stack.Screen 
          name={SCREEN.CARD_LIST} 
          component={CardsListScreen}
          options={{ title: TITLE.CARDS }}
           />
        <Stack.Screen 
          name={SCREEN.CARD_SEARCH} 
          component={CardSearchScreen}
          options={{ title: TITLE.CARD_SEARCH }}
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
