import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import FlatList from '../components/flatList';
import { updateCards } from '../store/actions/index';

const MechanicsListScreen = ( props ) => {
    const [cards, setCards] = useState([]);
    const [mechanics, setMechanics] = useState([]);
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
        let tempCardList = [];
        let tempMechanics = [];
        console.log("convertData")
        for (let i = 0; i < tempCards.length; i++) {
            for (let j = 0; j < tempCards.length; j++) {
                if (tempCards[i][j] != null && tempCards[i][j].mechanics != null) {
                    tempCardList.push(tempCards[i][j]);
                    for (let k = 0; k < tempCards[i][j].mechanics.length; k++) {
                        tempMechanics.push(tempCards[i][j].mechanics[k].name);
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
        let uniqueMechanics = [...new Set(tempMechanics)]
        // console.log(tempCardList)
        setCards(tempCardList);
        setMechanics(uniqueMechanics);
        // console.log(temp)
    }

    const onPress = (item) => {
        let selectedItem = [];
        console.log(item)
        for (let i = 0; i < cards.length; i++) {
            if (cards[i] != null && cards[i].mechanics != null) {
                for (let j = 0; j < cards[i].mechanics.length; j++) {
                    if (cards[i].mechanics[j].name === item) {
                        selectedItem.push(cards[i]);
                    }
                }
            }
        }
        // console.log(selectedItem)
        props.navigation.navigate('CardsListScreen');
        props.onUpdateCards(selectedItem)
    }

    return (
        <View style={styles.container}>
            <FlatList
                mechanics={mechanics}
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

const mapStateToProps = state => {
    return {
      cards: state.cards.cards,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onUpdateCards: (name) => dispatch(updateCards(name))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MechanicsListScreen);