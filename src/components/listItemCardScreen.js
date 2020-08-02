import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const listItemCardScreen = (props) => {
    const { value } = props;
    return (
        <TouchableOpacity>
            <View style={styles.listItem}>
                <Text>{value.item.name}</Text>
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

export default listItemCardScreen;