/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    async function sencron() {
      await getCards();
      await convertData();
    }
    sencron();
  }, [])

  const getCards = async () => {
    console.log("getCards")
    const response = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": "c48752c7a3msh90350058008de35p12cfb8jsnc4876ec34fd3"
      }
    }).catch(err => {
      console.log(err);
    });

    const jSon = await response.json();
        console.log(jSon)
  }

  const convertData = () => {
    console.log("convertData")
    console.log(cards);
  }

  return (
    <>
      <Text>TEST</Text>
      <Text>{cards}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
