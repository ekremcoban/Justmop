import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const listItemMechanics = (props) => {
    const { value } = props;
    
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                <Text>{value.item}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee"
    }
});

export default listItemMechanics;