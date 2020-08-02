import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItemMechanics from './listItemMechanics';

const flatListMechanics = props => {
    return <FlatList
        style={styles.listContainer}
        data={props.data}
        renderItem={(info) => (
            <ListItemMechanics
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

export default flatListMechanics;