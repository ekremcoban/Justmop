import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import FlatList from '../components/flatListCardScreen';

const CardSearchScreen = (props) => {
    const [value, setValue] = useState(null);
    const [result, setResult] = useState([])

    const getCards = async (name) => {
        let tempCards = [];
        const response = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/" + name, {
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
        if (tempCards.length > 0) {
            setResult(tempCards);
        }
    }

    const mySetValue = (text) => {
        setValue(text);
        getCards(text);
    }

    const onPress = (item) => {
        console.log(item);
    }

    const flat = (
        <FlatList
                data={result}
                onItemPressed={onPress}
                />
    )
    
    return (
        <>
            <TextInput
                style={styles.textInput}
                onChangeText={text => mySetValue(text)}
                value={value}
            />
            {result.length > 0 && flat}
        </>
    )
}

const styles = StyleSheet.create({
    textInput: { 
        height: 40, 
        backgroundColor: '#ABA8A9', 
        borderWidth: 1 }
});


export default CardSearchScreen;