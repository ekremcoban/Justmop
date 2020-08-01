import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

const CardSearchScreen = (props) => {
    const [value, setValue] = useState(null);

    const mySetValue = (text) => {
        console.log(props.cards);
        setValue(text);
    }

    return (
        <>
            <TextInput
                style={styles.textInput}
                onChangeText={text => mySetValue(text)}
                value={value}
            />
        </>
    )
}

const styles = StyleSheet.create({
    textInput: { 
        height: 40, 
        backgroundColor: '#ABA8A9', 
        borderWidth: 1 }
});

const mapStateToProps = state => {
    return {
        cards: state.cards.cards,
    };
};

export default connect(mapStateToProps)(CardSearchScreen);