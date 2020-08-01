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

    return (
        <ScrollView styles={styles.container}>
            {props.cards.map((item, index) => {
                return (
                    <CardFlip key={index} style={styles.cardContainer} ref={(card) => this['card' + index] = card} >
                        <TouchableOpacity
                            style={styles.cardFront}
                            onPress={() => this['card' + index].flip()} >
                            <View style={styles.title}><Text>Press To Info</Text></View>
                            <Image resizeMode="contain"
                                style={styles.tinyLogo}
                                source={{
                                    uri: item.img,
                                }}
                                />
                            {!item.img && <Text>NOT FOUND ANY PİCTURE</Text>}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.cardBack}
                            onPress={() => this['card' + index].flip()} >
                            <View style={styles.row}>
                                <View style={styles.left}>
                                    <Text style={[styles.textLeft, { marginTop: 15, }]}>artist</Text>
                                    <Text style={styles.textLeft}>cardId</Text>
                                    <Text style={styles.textLeft}>cardSet</Text>
                                    <Text style={styles.textLeft}>flavor</Text>
                                    <Text style={styles.textLeft}>name</Text>
                                </View>
                                <View style={styles.right}>
                                    <Text style={[styles.textRight, { marginTop: 20 }]}>{item.artist}</Text>
                                    <Text style={styles.textRight}>{item.cardId}</Text>
                                    <Text style={styles.textRight}>{item.cardSet}</Text>
                                    <Text style={styles.textRight}>{item.flavor}</Text>
                                    <Text style={styles.textRight}>{item.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </CardFlip>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    cardContainer: {
        flex: 1,
        // marginTop: 20,
        height: 300,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    cardFront: {
        width: '80%',
        height: 300,
        left: '10%',
        backgroundColor: '#FDFDFD',
    },
    cardBack: {
        width: "80%",
        height: 350,
        left: "10%",
        backgroundColor: '#F0F0F0',
    },
    title: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#F0F0F0',
    },
    tinyLogo: {
        width: 300,
        height: 250,
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
        paddingLeft: 10,
    },
    textRight: {
        fontSize: 14,
        height: 60,
    },
});

const mapStateToProps = state => {
    return {
        cards: state.cards.cards,
    };
};

export default connect(mapStateToProps)(CardsListScreen);