import React, { useEffect } from 'react'
import { Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import CardFlip from 'react-native-card-flip';

const CardsListScreen = (props) => {

    useEffect(() => {

    }, []);


    console.log(props)
    console.log(props.cards[0].img)
    const view = (
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
            <TouchableOpacity
                style={styles.cardFront}
                onPress={() => this.card.flip()} >
                <Image resizeMode="contain"
                    style={styles.tinyLogo}
                    source={{
                        uri: props.cards[0].img,
                    }}></Image>
                <Text>AB</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.cardBack}
                onPress={() => this.card.flip()} >
                <Text>CD</Text>
            </TouchableOpacity>
        </CardFlip>
    )
    return (
        <>
            {props && view}
        </>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    cardFront: {
        width: 400,
        height: 350,
        // backgroundColor: 'red',
    },
    cardBack: {
        width: 400,
        height: 350,
        marginLeft: "10%",
        backgroundColor: 'red',
    },
    tinyLogo: {
        width: 400,
        height: 350,
        marginTop: 10,
    },
});

const mapStateToProps = state => {
    return {
        cards: state.cards.cards,
    };
};

export default connect(mapStateToProps)(CardsListScreen);