import React from 'react';
import { StyleSheet, Text, ScrollView, FlatList } from 'react-native';

import ListItem from './listItemCardScreen';

const flatListCardScreen = props => {
    return <FlatList
        style={styles.listContainer}
        data={props.data}
        renderItem={(info) => (
            <ListItem
                value={info}
                onItemPressed={() => props.onItemPressed(info.item)}
            />
        )} />;
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default flatListCardScreen;