import React, { useState, createRef  } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import FlatList from '../components/flatListCardScreen';
import DelayInput from "react-native-debounce-input";

const CardSearchScreen = () => {
    const inputRef = createRef();
    const [value, setValue] = useState(null);
    const [result, setResult] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);

    const getCards = async (name) => {
        let tempCards = [];
        setShowSpinner(true);

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
            setShowSpinner(false);
        }
    }

    // for textinput
    const mySetValue = (text) => {
        setValue(text);
        getCards(text);
    }


    const flatList = (
        <View style={{width: '100%'}}>
            <FlatList data={result} />
        </View>
    )

    const spinner = (
        <View style={{ height: '100%', top: '40%' }}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )

    let show = showSpinner ? spinner : flatList;

    return (
        <>
            <DelayInput
                value={value}
                minLength={3}
                inputRef={inputRef}
                onChangeText={mySetValue}
                delayTimeout={300}
                style={styles.textInput}
            />
            {show}
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        backgroundColor: '#F0FFF0',
        borderWidth: 1
    }
});


export default CardSearchScreen;