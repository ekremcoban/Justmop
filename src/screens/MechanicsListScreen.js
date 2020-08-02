import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, ActivityIndicator, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import FlatListMechanics from '../components/flatListMechanics';
import { updateCards, saveAllCards } from '../store/actions/index';
import { SCREEN } from '../Utilities/Text';

const MechanicsListScreen = (props) => {
    const [cards, setCards] = useState([]);
    const [mechanics, setMechanics] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const [showSplashScreen, setSplashScreen] = useState(true);

    let tempCards = [];

    useEffect(() => { 
        async function sencron() {
            setTimeout(function(){  
                setSplashScreen(false);  
              }, 8000); 
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

    // Finding items that has mechanics item
    const convertData = () => {
        let tempCardList = [];
        let tempMechanics = [];

        for (let i = 0; i < tempCards.length; i++) {
            for (let j = 0; j < tempCards.length; j++) {
                if (tempCards[i][j] != null && tempCards[i][j].mechanics != null) {
                    tempCardList.push(tempCards[i][j]);
                    for (let k = 0; k < tempCards[i][j].mechanics.length; k++) {
                        tempMechanics.push(tempCards[i][j].mechanics[k].name);
                    }
                }
            }
        }

        let uniqueMechanics = [...new Set(tempMechanics)]
        setCards(tempCardList);
        props.onSaveAllCards(tempCardList);
        setMechanics(uniqueMechanics);
        setShowSpinner(false);
    }

    const onPress = (item) => {
        let selectedItem = [];
        
        for (let i = 0; i < cards.length; i++) {
            if (cards[i] != null && cards[i].mechanics != null) {
                for (let j = 0; j < cards[i].mechanics.length; j++) {
                    if (cards[i].mechanics[j].name === item) {
                        selectedItem.push(cards[i]);
                    }
                }
            }
        }

        props.navigation.navigate(SCREEN.CARD_LIST);
        props.onUpdateCards(selectedItem)
    }

    const Splash_Screen = (  
        <View style={styles.SplashScreen_RootView}> 
        <Text style={{textAlign: 'center', top: 30}}>Data Is Loading...</Text> 
            <View style={styles.SplashScreen_ChildView}>  
                  <Image source={{uri:'https://homepages.cae.wisc.edu/~ece533/images/watch.png'}}  
               style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
           </View>  
        </View> )  

    const flatList = (
        <View style={{width: '100%'}}>
            <Button
                title="Search"
                onPress={() => props.navigation.navigate(SCREEN.CARD_SEARCH)} />
            <FlatListMechanics
                data={mechanics}
                onItemPressed={onPress}
            />
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
            { showSplashScreen ? Splash_Screen : show }
        </>
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
        allCards: state.cards.allCards,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateCards: (name) => dispatch(updateCards(name)),
        onSaveAllCards: (value) => dispatch(saveAllCards(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MechanicsListScreen);