import React from 'react';
import { StyleSheet, Text, ScrollView, FlatList } from 'react-native';

import ListItem from './listItem';

const flatList = props => {
    return <FlatList
        style={styles.listContainer}
        data={props.cards}
        renderItem={(info) => (
            <ListItem
                value={info.item}
                onItemPressed={() => props.onItemPressed(info.item)}
            />
        )} />;
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default flatList;