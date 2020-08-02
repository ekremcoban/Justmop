import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from './listItemCardScreen';

const flatListCardScreen = ({ data }) => {
    return <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={(info) => (
            <ListItem
                value={info}
            />
        )} />;
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default flatListCardScreen;