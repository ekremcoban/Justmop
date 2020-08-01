import React, { useEffect } from 'react'
import {
    Text, TouchableOpacity, StyleSheet,
    ScrollView, Image, View
} from 'react-native';
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
                {!props.cards[0].img && <Text>RESİM BULUNAMADI</Text>}
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.cardBack}
                onPress={() => this.card.flip()} >
                <View style={styles.row}>
                    <View style={styles.left}>
                        <Text style={styles.textLeft}>artist</Text>
                        <Text style={styles.textLeft}>cardId</Text>
                        <Text style={styles.textLeft}>cardSet</Text>
                        <Text style={styles.textLeft}>flavor</Text>
                        <Text style={styles.textLeft}>name</Text>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.textRight}>{props.cards[0].artist}</Text>
                        <Text style={styles.textRight}>{props.cards[0].cardId}</Text>
                        <Text style={styles.textRight}>{props.cards[0].cardSet}</Text>
                        <Text style={styles.textRight}>{props.cards[0].flavor}</Text>
                        <Text style={styles.textRight}>{props.cards[0].name}</Text>
                    </View>
                </View>
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
        width: "80%",
        height: 350,
        left: "10%",
        backgroundColor: 'red',
    },
    tinyLogo: {
        width: 400,
        height: 350,
        left: "10%",
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    left: {
        flex: 2,
    },
    right: {
        flex: 5,
    },
    textLeft: {
        fontSize: 20,
        height: 60,
    },
    textRight: {
        fontSize: 14,
        height: 60,
        margintTop:5,
    },
});

const mapStateToProps = state => {
    return {
        cards: state.cards.cards,
    };
};

export default connect(mapStateToProps)(CardsListScreen);