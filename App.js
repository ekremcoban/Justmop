/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';

import FlatList from './src/components/flatList';

const App: () => React$Node = () => {
  const [cards, setCards] = useState([]);
  let tempCards = [];

  useEffect(() => {
    async function sencron() {
      await getCards();
      await convertData();
    }
    sencron();
  }, [])

  const getCards = async () => {
    const response = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": "c48752c7a3msh90350058008de35p12cfb8jsnc4876ec34fd3"
      }
    }).catch(err => {
      console.log(err);
    });

    const json = await response.json();
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        const element = json[key];
        tempCards.push(element);
      }
    }
  }

  const convertData = () => {
    let temp = [];
    let tempMechanics = [];
    console.log("convertData")
    for (let i = 0; i < tempCards.length; i++) {
      for (let j = 0; j < tempCards.length; j++) {
        if (tempCards[i][j] != null && tempCards[i][j].mechanics != null) {
          for (let k = 0; k < tempCards[i][j].mechanics.length; k++) {
            tempMechanics.push(tempCards[i][j]);
          }
          // temp.push(tempCards[i][j]);
          // console.log(tempCards[i][j])
        }
      }
    }

    // for (let i = 0; i < temp.length; i++) {
    //     for (let j = 0; j < temp.mechanics.length; j++) {
                    
    //     }      
    // }
    let unique = [...new Set(tempMechanics)]
    console.log(unique)
    setCards(unique);
    // console.log(temp)
  }

  const onPress = (item) => {
    // Alert.alert("ekrem");
    console.log(item.name)
  }

  return (
    <View style={styles.container}>
      <FlatList
        cards={cards}
        onItemPressed={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;
